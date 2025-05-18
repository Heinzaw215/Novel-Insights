import React, { useEffect } from "react";

export function useReturnFocus(
  isOpen: boolean,
  triggerRef: React.RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!isOpen && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [isOpen, triggerRef]);
}