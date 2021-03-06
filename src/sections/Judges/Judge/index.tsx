import React from "react";
import styled from "styled-components";
import copy from "src/copy";
import media from "src/utils/media";

const Wrapper = styled.div`
  font-family: "Raleway";
  text-align: center;
  color: #51192c;

  ${media.phone`
    margin: 10px 0;
    `}
`;

const Name = styled.h3`
  font-weight: 700;
  margin: 10px 0 5px 0;
`;

const Quote = styled.p`
  margin: 0 auto;
  font-style: italic;
  font-size: 14px;
  line-height: 1.5em;
  width: 150px;
`;

const Photo = styled.img`
  width: 100px;
  margin: 0 60px;
  border-radius: 50%;
  border: 6px solid #51192c;
`;

interface JudgeProps {
  photoPath: string;
  name: string;
  quote: string;
}

const Judge = (props: JudgeProps) => (
  <Wrapper>
    <Photo src={`/images/judges/${props.photoPath}`} />
    <Name>{props.name}</Name>
    <Quote>
      &quot;{copy.judges.prefix} {props.quote}&quot;
    </Quote>
  </Wrapper>
);

export default React.memo(Judge);
