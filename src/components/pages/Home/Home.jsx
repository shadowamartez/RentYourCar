import { Link } from 'react-router-dom';
import {
  HomeContainer,
  AnimatedHeading,
  AnimatedSubheading,
  Paragraph,
  HighlightText,
  AnimatedCatalogButton,
  FeatureContainer,
  FeatureCard,
  FeatureIcon,
  FeatureHeading,
  FeatureDescription,
  ExcitingFeatureCard,
} from "./Home.styled";

const Home = () => {
  return (
    <HomeContainer>
      <AnimatedHeading>Rent Your Car</AnimatedHeading>
      <AnimatedSubheading>Your Journey Starts Here</AnimatedSubheading>
      <Paragraph>
        Welcome to <HighlightText>Rent Your Car</HighlightText>, your ultimate destination for premium car rentals.
        Experience the freedom of the open road with our diverse fleet and personalized service.
      </Paragraph>
      <Link to="/catalog">
        <AnimatedCatalogButton>Rent Your Car</AnimatedCatalogButton>
      </Link>

      <FeatureContainer>
        <FeatureCard>
          <FeatureIcon>🚗</FeatureIcon>
          <FeatureHeading>Wide Selection</FeatureHeading>
          <FeatureDescription>
            Explore a wide selection of vehicles, from sleek sedans to spacious SUVs. Find the perfect car for any occasion.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>💸</FeatureIcon>
          <FeatureHeading>Affordable Rates</FeatureHeading>
          <FeatureDescription>
            Enjoy competitive rates and flexible rental options. We believe in providing quality service without breaking the bank.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>🛠️</FeatureIcon>
          <FeatureHeading>Top-notch Maintenance</FeatureHeading>
          <FeatureDescription>
            Our fleet undergoes regular maintenance to ensure a smooth and reliable driving experience. Your safety is our priority.
          </FeatureDescription>
        </FeatureCard>
        <ExcitingFeatureCard>
          <FeatureIcon>🌟</FeatureIcon>
          <FeatureHeading>Exciting Features</FeatureHeading>
          <FeatureDescription>
            Discover our exciting features that make your car rental experience unforgettable. From in-car entertainment to advanced safety features, we've got you covered.
          </FeatureDescription>
        </ExcitingFeatureCard>
      </FeatureContainer>
    </HomeContainer>
  );
}

export default Home;