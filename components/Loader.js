import { tailChase } from "ldrs";
import React from "react";

tailChase.register();

const Loader = () => (
  <l-tail-chase size="40" speed="1.75" color="black"></l-tail-chase>
);

export default Loader;
