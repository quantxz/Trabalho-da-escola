import React from 'react';
import { Input, Label } from "../generalComponents/inputs";

function LabelAndInputProduct(prop) {
  return (
    <div>
      <Label>
        {prop.icon}
        {prop.labelTitle}
      </Label>
      <Input
        placeholder={prop.inputPlaceHolder}
        value={prop.value}
        onChange={prop.onChange}
      required/>
    </div>
  );
}

export default LabelAndInputProduct;