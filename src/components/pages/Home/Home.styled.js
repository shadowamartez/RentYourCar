import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 3em;
  color: #1a1a1a;
  margin-bottom: 20px;
  font-family: Manrope;
`;

export const Subheading = styled.h2`
  font-size: 1.8em;
  color: #555;
  margin-bottom: 30px;
  font-family: Manrope;
`;

export const Paragraph = styled.p`
  font-size: 1.3em;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
  font-family: Manrope;
`;

export const HighlightText = styled.span`
  color: #3470FF;
  font-weight: bold;
  font-family: Manrope;
`;

export const CatalogButton = styled.button`
  background-color: #3470FF;
  color: #fff;
  padding: 15px 30px;
  font-size: 1.5em;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: Manrope;

  &:hover {
    background-color: #0B44CD;
  }
`;

export const FeatureContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;

export const FeatureCard = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  padding: 30px;
  border-radius: 10px;
  margin: 0 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 2em;
  color: #ff7e5f;
  margin-bottom: 20px;
`;

export const FeatureHeading = styled.h3`
  font-size: 1.6em;
  color: #333;
  margin-bottom: 15px;
  font-family: Manrope;
`;

export const FeatureDescription = styled.p`
  font-size: 1.2em;
  color: #555;
`;

export const ExcitingFeatureCard = styled(FeatureCard)`
  background-color: #f5f5f5;
  color: #333;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const AnimatedHeading = styled(Heading)`
  transition: color 0.3s ease;

  &:hover {
    color: yellow;
  }
`;

export const AnimatedSubheading = styled(Subheading)`
  transition: color 0.3s ease;

  &:hover {
    color: #ff5722;
  }
`;

export const AnimatedCatalogButton = styled(CatalogButton)`
  background-color: #3470FF;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0B44CD;
  }
`;
