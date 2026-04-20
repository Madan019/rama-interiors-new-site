import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDirectory = path.join(process.cwd(), 'public/portfolio');
const outputFile = path.join(process.cwd(), 'src/lib/portfolio-data.ts');

function generatePortfolio() {
  try {
    if (!fs.existsSync(imagesDirectory)) {
      console.warn('Portfolio directory not found');
      return;
    }

    const files = fs.readdirSync(imagesDirectory);

    const images = files
      .filter(file => /\.(png|jpe?g|webp|svg)$/i.test(file))
      .map(file => {
        let category = "Custom Projects";
        const lowerFile = file.toLowerCase();

        if (lowerFile.includes('kitchen')) category = "Modular Kitchens";
        else if (lowerFile.includes('wardrobe')) category = "Wardrobes & Storage";
        else if (lowerFile.includes('bed')) category = "Beds";
        else if (lowerFile.includes('office')) category = "Workstations / Office";
        else if (lowerFile.includes('school')) category = "Institutional Furniture / School";
        else if (lowerFile.includes('tv') || lowerFile.includes('residential')) category = "Residential";
        else if (lowerFile.includes('commercial')) category = "Commercial Interiors";

        return {
          src: `/portfolio/${file}`,
          alt: `Rama Interiors - ${file.replace(/-/g, ' ').split('.')[0]}`,
          category: category
        };
      });

    const content = `// This file is auto-generated. Do not edit manually.
export const portfolioImages = ${JSON.stringify(images, null, 2)};
`;

    fs.writeFileSync(outputFile, content);
    console.log('Portfolio data generated successfully!');
  } catch (error) {
    console.error('Error generating portfolio data:', error);
  }
}

generatePortfolio();
