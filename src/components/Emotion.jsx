/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx, css } from "@emotion/react";
import { styled } from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    alignitems: center;
  `;
  const titleStyle = css({
    margin: 0,
    color: "#3d84a8"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <button>fight!!</button>
    </div>
  );
};
