import React, { useEffect } from "react";

export function useReturnFocus(
  active: boolean,
  triggerRef: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    if (!active && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [active, triggerRef]);
}