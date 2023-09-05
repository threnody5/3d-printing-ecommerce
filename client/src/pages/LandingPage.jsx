import { useEffect, useState } from 'react';
import { fetchImage } from '../api/fetch-image';
import './styles.css';

const printerNames = [
  'ender-3-v2.jpg',
  'elegoo-saturn-2-8k.jpeg',
  'prusa-mk4.jpg',
];

const LandingPage = () => {
  const [ender3Image, setEnder3Image] = useState(null);
  const [elegooSaturnImage, setElegooSaturnImage] = useState(null);
  const [prusaMk4, setPrusaMk4] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageUrl = await Promise.all(
          printerNames.map(async (printerName) => {
            return await fetchImage(printerName);
          })
        );
        setEnder3Image(imageUrl[0]);
        setElegooSaturnImage(imageUrl[1]);
        setPrusaMk4(imageUrl[2]);
      } catch (error) {
        console.error('Set Appropriate Error Handling Here', error);
      }
    };
    loadImages();
  }, []);

  return (
    <main>
      <div className='printer-container__ender3v2'>
        <div className='printer-container-paragraph__ender3v2'>
          <p>
            Unlock Your Creative Potential with the Ender 3 V2 - Your Gateway to
            3D Printing Adventure! 🚀
          </p>
          <p>
            Discover the limitless world of 3D printing and turn your
            imagination into reality with the Ender 3 V2. Whether you're a
            seasoned maker or just starting out, this budget-friendly 3D printer
            offers:
          </p>
          <p>
            🎨 Endless Creativity: Transform your ideas into tangible objects.
            From custom prototypes to artistic masterpieces, the Ender 3 V2
            empowers your creative journey.
          </p>
          <p>
            💰 Affordability: Get into 3D printing without breaking the bank.
            The Ender 3 V2 offers incredible value for your investment.
          </p>
        </div>
        <img
          className='printer-image__ender3v2'
          src={ender3Image}
          alt='Ender 3 V2'
        />
      </div>
      <div className='printer-container__elegoo-saturn'>
        <img
          className='printer-image__elegoo_saturn'
          src={elegooSaturnImage}
          alt='Elegoo Saturn 2 8k'
        />
        <div className='printer-container-paragraph__elegoo-saturn'>
          <p>
            🚀 Unleash your creativity and bring your wildest ideas to life with
            this high-resolution 3D printer.
          </p>
          <p>
            Whether you're a beginner or an experienced enthusiast, the Saturn 2
            offers unmatched precision, stunning detail, and user-friendly
            features that make diving into the 3D printing hobby an absolute
            joy.
          </p>
          <p>
            Elevate your crafting, prototyping, and DIY projects to a whole new
            level – the Saturn 2 is your gateway to limitless possibilities.
          </p>
          <p>
            Start your journey today and experience the future of personal
            fabrication!" 🌟🖨️ #3DPrinting #ElegooSaturn2 #CreativityUnleashed
          </p>
        </div>
      </div>
      <div className='printer-container__prusa-mk4'>
        <div className='printer-container-paragraph__prusa-mk4'>
          <p>
            Unlock the world of limitless creativity with the Prusa MK4 3D
            printer! 🌟
          </p>
          <p>
            Whether you're a newcomer to the 3D printing hobby or a seasoned
            enthusiast, the MK4 is your perfect companion. Its user-friendly
            design, exceptional print quality, and reliable performance make it
            the ideal choice for beginners.
          </p>
          <p>
            Dive into the world of personalized gifts, custom prototypes, and
            DIY projects with ease.
          </p>
          <p>
            Join the Prusa community and embark on an exciting journey of
            making. Start your 3D printing adventure today with the MK4 – where
            innovation meets affordability!" 🖨️🛠️ #3DPrinting #PrusaMK4
            #CreateWithConfidence
          </p>
        </div>
        <img
          className='printer-image__prusa-mk4'
          src={prusaMk4}
          alt='Prusa MK 4'
        />
      </div>
    </main>
  );
};

export default LandingPage;
