import styled from "styled-components";

export const AboutContainer = styled.div`
  background: linear-gradient(135deg, #1a1a1a, #111111);
  color: #eee;
  padding: 80px 30px;
  max-width: 1300px;
  margin: 0 auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  user-select: none;
`;

export const Section = styled.section`
  margin-bottom: 80px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  position: relative;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #d4af37;
  margin-bottom: 20px;
  letter-spacing: 1px;
  text-shadow: 0 0 6px #d4af37aa;
`;

export const Paragraph = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #ccc;
  max-width: 760px;
  margin-bottom: 16px;
`;

export const Highlight = styled.span`
  color: #ffd54f;
  font-weight: 700;
  text-shadow:
    0 0 6px #ffd54f88,
    0 0 10px #d4af37cc;
`;

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 25px;
`;

export const TechItem = styled.div`
  background: #222;
  padding: 18px 25px;
  border-radius: 12px;
  border-left: 6px solid #ffd54f;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  box-shadow:
    0 0 10px #ffd54f33,
    inset 0 0 8px #ffd54f44;
  cursor: default;
  transition:
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease;

  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow:
      0 8px 25px #ffd54f99,
      inset 0 0 20px #ffd54fcc;
  }
`;

export const Divider = styled.hr`
  margin: 70px auto 0;
  border: none;
  height: 3px;
  max-width: 400px;
  background: linear-gradient(
    to right,
    transparent,
    #d4af37,
    #ffd54f,
    #d4af37,
    transparent
  );
  box-shadow:
    0 0 20px #ffd54f88;
  border-radius: 10px;
`;

// Custom bullet list style for unique check marks
export const CustomList = styled.ul`
  list-style: none;
  padding-left: 1rem;
  color: #ddd;
  font-size: 1.1rem;
  max-width: 680px;

  li {
    position: relative;
    margin-bottom: 12px;
    padding-left: 30px;
    line-height: 1.5;

    &::before {
      content: "✔";
      position: absolute;
      left: 0;
      top: 2px;
      color: #ffd54f;
      font-weight: 700;
      font-size: 1.3rem;
      text-shadow:
        0 0 5px #ffd54f88;
    }
  }
`;
export const HighlightLink = styled.a`
  color: #d4af37;
  font-weight: bold;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
    cursor: pointer;
  }
`;

