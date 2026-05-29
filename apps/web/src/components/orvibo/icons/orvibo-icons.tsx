"use client";

import {
  ArrowUp,
  CaretRight,
  PlayCircleIcon,
  X,
  type IconProps,
} from "@phosphor-icons/react";

export function OrviboCaretRight(props: IconProps) {
  return <CaretRight weight="bold" size={12} aria-hidden {...props} />;
}

/** Outline circle + triangle — matches legacy icon_player_white/black.svg */
export function OrviboPlayCircle({
  onDark = false,
  size = 16,
  ...props
}: IconProps & { onDark?: boolean }) {
  return (
    <PlayCircleIcon
      weight="bold"
      size={size}
      color={onDark ? "#fff" : "#000"}
      aria-hidden
      {...props}
    />
  );
}

export function OrviboClose(props: IconProps) {
  return <X weight="bold" size={28} aria-hidden {...props} />;
}

export function OrviboArrowUp(props: IconProps) {
  return <ArrowUp weight="bold" size={20} aria-hidden {...props} />;
}
