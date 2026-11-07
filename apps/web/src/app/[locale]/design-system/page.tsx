import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { SiteShell } from "@/components/orvibo/layout";
import { ArrowLink } from "@/components/orvibo/ui/arrow-link";
import { Badge } from "@/components/orvibo/ui/badge";
import { Breadcrumb } from "@/components/orvibo/ui/breadcrumb";
import { Button } from "@/components/orvibo/ui/button";
import { Card, CardText, CardTitle } from "@/components/orvibo/ui/card";
import { Choice, Field, Input, Select } from "@/components/orvibo/ui/field";
import { Notice } from "@/components/orvibo/ui/notice";
import { Price } from "@/components/orvibo/ui/price";
import { ProductCard } from "@/components/orvibo/ui/product-card";
import { SectionHeading } from "@/components/orvibo/ui/section-heading";
import { TextLink } from "@/components/orvibo/ui/text-link";
import { PLACEHOLDER_ROBOTS } from "@/lib/orvibo/site";
import { getDictionary, isLocale } from "../dictionaries";
import { QuantityDemo } from "./QuantityDemo";

/**
 * The design system's components with sample shop copy, for checking them in the real app
 * (https://claude.ai/artifact/6LfGFDDLBMjnBLSZBmsdXC is the reference). Not linked and not indexed; the sample copy is
 * Romanian on purpose and stays out of the dictionaries.
 */
export const metadata: Metadata = {
  title: "Design system | ORVIBO",
  robots: PLACEHOLDER_ROBOTS,
};

const SWATCHES = [
  "page",
  "surface",
  "surface-muted",
  "ink",
  "ink-muted",
  "line",
  "line-strong",
  "accent",
  "accent-ink",
  "champagne",
  "success",
  "warning",
  "danger",
];

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-ov-6 border-ov-line border-t py-ov-12">
      <h2 className="text-ov-title-m">{title}</h2>
      {children}
    </section>
  );
}

export default async function DesignSystemPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const base = `/${locale}`;

  return (
    <SiteShell base={base} dict={dict}>
      <main className="mx-auto max-w-ov-content px-ov-4 py-ov-24 sm:px-ov-6">
        <Breadcrumb
          className="mb-ov-6"
          items={[{ href: base, label: "Acasă" }, { label: "Design system" }]}
        />
        <h1 className="mb-ov-4 text-ov-title-l">Design system</h1>
        <p className="mb-ov-12 max-w-[640px] text-ov-body text-ov-ink-muted">
          Componentele magazinului orvibo.ro, cu texte de exemplu.
        </p>

        <Section title="Culori">
          <div className="grid grid-cols-2 gap-ov-4 sm:grid-cols-4 lg:grid-cols-7">
            {SWATCHES.map((name) => (
              <div className="flex flex-col gap-ov-2" key={name}>
                <div
                  className="h-[64px] rounded-ov-s border border-ov-line"
                  style={{ background: `var(--ov-${name})` }}
                />
                <span className="text-ov-caption text-ov-ink-muted">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Tipografie">
          <div className="flex flex-col gap-ov-3">
            <p className="text-ov-title-l">Coșul tău</p>
            <p className="text-ov-title-m">Livrare și plată</p>
            <p className="text-ov-title-s">Panou de control MixPad 7</p>
            <p className="text-ov-body">
              Livrăm în toată România în 1–3 zile lucrătoare.
            </p>
            <p className="text-ov-body-s text-ov-ink-muted">
              Prețul include TVA 19%.
            </p>
            <p className="text-ov-caption text-ov-ink-muted">
              Cod produs: MP7-RO
            </p>
          </div>
        </Section>

        <Section title="Butoane">
          <div className="flex flex-wrap items-center gap-ov-4">
            <Button size="l" variant="primary">
              Adaugă în coș
            </Button>
            <Button>Află mai multe</Button>
            <Button size="s">Detalii</Button>
            <Button disabled size="l" variant="primary">
              Stoc epuizat
            </Button>
            <ArrowLink href={base}>Află mai multe</ArrowLink>
          </div>
          <div className="ov-band flex flex-wrap items-center gap-ov-4 rounded-ov-s p-ov-6">
            <Button variant="primary">Comandă acum</Button>
            <Button>Află mai multe</Button>
            <ArrowLink href={base}>Vezi videoclipul</ArrowLink>
          </div>
        </Section>

        <Section title="Titlu de secțiune">
          <SectionHeading
            ctaHref={base}
            ctaLabel="Află mai multe"
            subtitle="Inteligență și design în echilibru"
            title="Panou inteligent MixPad 10"
            topMargin={0}
          />
        </Section>

        <Section title="Produse">
          <div className="grid grid-cols-2 gap-ov-6 lg:grid-cols-4">
            <ProductCard
              badge={{ label: "Nou", tone: "new" }}
              href={`${base}/product/mixpad_7`}
              image={{
                alt: "MixPad 7",
                height: 800,
                src: "/guanwang_second/front/images/products/mixpad_7/product-08ab3fcd26.png",
                width: 800,
              }}
              name="Panou de control MixPad 7"
              price={249900}
              tagline="Ecran de 7″, control vocal"
            />
            <ProductCard
              badge={{ label: "−15%", tone: "sale" }}
              compareAt={199900}
              href={`${base}/product/v5`}
              image={{
                alt: "V5",
                height: 3820,
                src: "/guanwang_second/front/images/2020/nav/product_2_4-0080946f53.png",
                width: 3230,
              }}
              name="Încuietoare inteligentă V5"
              price={169900}
              tagline="Recunoaștere facială 3D"
            />
          </div>
          <div className="flex flex-wrap items-center gap-ov-3">
            <Badge tone="new">Nou</Badge>
            <Badge tone="sale">−15%</Badge>
            <Badge>Zigbee</Badge>
            <Badge tone="stock">În stoc</Badge>
            <Badge tone="low">Ultimele 3 bucăți</Badge>
          </div>
          <div className="flex flex-col gap-ov-3">
            <Price amount={129900} note="TVA inclus" size="l" />
            <Price amount={84900} compareAt={99900} size="l" />
            <Price amount={34990} />
          </div>
          <QuantityDemo />
        </Section>

        <Section title="Formulare">
          <div className="grid max-w-[720px] gap-ov-4 sm:grid-cols-2">
            <Field
              help="Îți trimitem aici confirmarea comenzii."
              id="ds-email"
              label="Adresa de e-mail"
            >
              {(props) => (
                <Input {...props} placeholder="nume@exemplu.ro" type="email" />
              )}
            </Field>
            <Field
              error="Numărul are 10 cifre, de exemplu 0712 345 678."
              id="ds-phone"
              label="Telefon"
            >
              {(props) => <Input {...props} defaultValue="07123" type="tel" />}
            </Field>
            <Field id="ds-county" label="Județ">
              {(props) => (
                <Select {...props} defaultValue="Cluj">
                  <option>București</option>
                  <option>Cluj</option>
                  <option>Timiș</option>
                </Select>
              )}
            </Field>
            <div className="flex flex-col gap-ov-3">
              <Choice defaultChecked label="Am citit termenii și condițiile" />
              <Choice
                defaultChecked
                label="Card bancar"
                name="ds-pay"
                type="radio"
              />
              <Choice label="Ramburs la livrare" name="ds-pay" type="radio" />
            </div>
          </div>
        </Section>

        <Section title="Mesaje și carduri">
          <div className="flex max-w-[560px] flex-col gap-ov-3">
            <Notice title="Livrare gratuită">
              pentru comenzile de peste 500 lei.
            </Notice>
            <Notice title="Comanda #10482 a fost plasată." tone="success">
              Ți-am trimis confirmarea pe e-mail.
            </Notice>
            <Notice title="Livrare în 5–7 zile." tone="warning">
              Produsul vine din depozitul central.
            </Notice>
            <Notice title="Plata nu a trecut." tone="danger">
              Verifică datele cardului sau alege altă metodă de plată.
            </Notice>
          </div>
          <Card className="max-w-[520px]">
            <CardTitle>În curând</CardTitle>
            <CardText>Încă pregătim această pagină.</CardText>
            <p className="text-ov-body">
              <TextLink href={base}>Înapoi la pagina principală</TextLink>
            </p>
          </Card>
        </Section>
      </main>
    </SiteShell>
  );
}
