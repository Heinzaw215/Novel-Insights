import React, { useEffect } from "react";

export function useReturnFocus(
  isOpen: boolean,
  triggerRef: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    if (!isOpen && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [isOpen, triggerRef]);
}