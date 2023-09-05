import axios from 'axios';

export const fetchImage = async (imageName) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API_URL}${
        import.meta.env.VITE_IMAGE_API_URL
      }${imageName}`,
      {
        responseType: 'arraybuffer',
      }
    );
    const imageBlob = new Blob([response.data], {
      type: response.headers['content-type'],
    });
    const imageUrl = URL.createObjectURL(imageBlob);
    return imageUrl;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};
