import { Variant } from "framer-motion";

type ProjectVariant = {
  initial: Variant;
  animate: Variant;
  exit: Variant;
};

export const windowVariant: ProjectVariant = {
  initial: {
    backdropFilter: "blur(0px)",
  },
  animate: {
    backdropFilter: "blur(10px)",
  },
  exit: {
    //
  },
};

export const titleVariant: ProjectVariant = {
  initial: {
    //
  },
  animate: {
    //
  },
  exit: {
    //
  },
};

export const paragraphVariant: ProjectVariant = {
  initial: {
    //
  },
  animate: {
    //
  },
  exit: {
    //
  },
};
