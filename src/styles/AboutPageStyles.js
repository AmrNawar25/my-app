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
  box-shadow: 0 0 20px #ffd54f88;
  border-radius: 10px;
`;

// 🎯 New Stylish List
export const CustomList = styled.ul`
  list-style: none;
  padding-left: 0;
  color: #ddd;
  font-size: 1.1rem;
  max-width: 760px;
  margin-top: 16px;

  li {
    position: relative;
    margin-bottom: 16px;
    padding: 12px 20px 12px 18px;
    background: #1e1e1e;
    border-left: 5px solid #ffd54f;
    border-radius: 10px;
    box-shadow: 0 0 10px #ffd54f33;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 0 15px #ffd54f77, inset 0 0 8px #ffd54f55;
    }
  }
`;
