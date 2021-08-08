import React from "react";

export default interface IButton {
  label: string;
  id?: string;
  click: () => void;
}
