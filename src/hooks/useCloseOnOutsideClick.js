import { useEffect } from "react";

export const useCloseOnOutsideClick = (id, fn) => {
  useEffect(() => {
    document.addEventListener("click", e => {
      if (e.target.closest(`#${id}`)) return;
      fn(false);
    });

    return () => {
      document.getElementById(id).removeEventListener("click", document.getElementById(id));
    };
  }, [fn, id]);

  return null;
};


// Source
  //  idea : Some guy on the internet... forgot to copy-paste the link.
  //  Bug fix: https://github.com/angular/zone.js/issues/847
