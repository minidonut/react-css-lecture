import React from "react";
import { SignGroup } from "./SignGroup";

export const FootDialog = () => {
  return <div className="FootDialog-container">
    <div>
      <h3>지금 가입하고</h3>
      <p>영화, TV, 책에서 경험한 감동을 기록해보세요.</p>
    </div>
    <SignGroup />
  </div>;
};
