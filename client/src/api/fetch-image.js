import axios from 'axios';

/**
 * Function to fetch an image from the server using its name and convert it into a displayable URL.
 * @param {string} imageName - The name or identifier of the image to fetch.
 * @returns {string} URL of the fetched image for display purposes.
 */
export const fetchImage = async (imageName) => {
  try {
    // Fetch the image data from the server.
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API_URL}${
        import.meta.env.VITE_IMAGE_API_URL
      }${imageName}`, // Image API endpoint URL.
      {
        responseType: 'arraybuffer', // Response type as array buffer for binary data.
      }
    );
    // Create a Blob from the fetched data with the appropriate content type.
    const imageBlob = new Blob([response.data], {
      type: response.headers['content-type'], // Extract content type from response headers.
    });
    // Create a displayable URL (object URL) from the Blob.
    const imageUrl = URL.createObjectURL(imageBlob);
    return imageUrl; // Return the URL of the fetched image for display purposes.
  } catch (error) {
    // Log and re-throw the error if the request fails.
    console.error('Error: ', error);
    throw error; // Propagate the error to the caller.
  }
};
