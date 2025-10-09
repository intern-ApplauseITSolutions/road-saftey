// Dynamic image loader utility
// This function automatically imports all images from the banner folder

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

// Dynamically import all images from the banner folder
// This will automatically pick up any new images you add to the folder
export const getBannerImages = () => {
  try {
    // Use webpack's require.context to dynamically import all images
    const images = importAll(
      require.context('../assets/images/banner', false, /\.(png|jpe?g|svg|gif|webp)$/i)
    );
    
    // Convert to array and sort by filename for consistent ordering
    const imageArray = Object.keys(images)
      .sort((a, b) => {
        // Extract numbers from filenames for proper numeric sorting
        const numA = parseInt(a.match(/\d+/) || [0]);
        const numB = parseInt(b.match(/\d+/) || [0]);
        return numA - numB;
      })
      .map(key => images[key]);
    
    return imageArray;
  } catch (error) {
    console.warn('Could not load banner images dynamically:', error);
    // Fallback to empty array if dynamic loading fails
    return [];
  }
};

// Alternative method: Manual image registration
// Use this if you want more control over which images to include
export const getManualBannerImages = () => {
  const imageModules = [];
  
  try {
    // Direct imports - this should work reliably
    try {
      const img1 = require('../assets/images/banner/1.jpg');
      imageModules.push(img1.default || img1);
      console.log('Successfully loaded: 1.jpg');
    } catch (err) {
      console.warn('Could not load 1.jpg:', err.message);
    }
    
    try {
      const img2 = require('../assets/images/banner/2.jpg');
      imageModules.push(img2.default || img2);
      console.log('Successfully loaded: 2.jpg');
    } catch (err) {
      console.warn('Could not load 2.jpg:', err.message);
    }
    
    try {
      const img3 = require('../assets/images/banner/IMG_2239.jpg');
      imageModules.push(img3.default || img3);
      console.log('Successfully loaded: IMG_2239.jpg');
    } catch (err) {
      console.warn('Could not load IMG_2239.jpg:', err.message);
    }
    
    console.log(`Total manual images loaded: ${imageModules.length}`);
  } catch (error) {
    console.warn('Could not load manual banner images:', error);
  }
  
  return imageModules;
};

// Function to refresh and get updated image list
// Call this when you add new images to the banner folder
export const refreshBannerImages = () => {
  // Clear any cached modules (if using module caching)
  if (typeof window !== 'undefined' && window.__webpack_require__) {
    // Clear webpack cache for banner images
    const context = require.context('../assets/images/banner', false, /\.(png|jpe?g|svg|gif|webp)$/i);
    context.keys().forEach(key => {
      delete window.__webpack_require__.cache[context.resolve(key)];
    });
  }
  
  return getAllBannerImages();
};

// Get all available banner images (tries dynamic first, falls back to manual)
export const getAllBannerImages = () => {
  console.log('Loading banner images...');
  
  const dynamicImages = getBannerImages();
  console.log(`Dynamic images found: ${dynamicImages.length}`);
  
  if (dynamicImages.length > 0) {
    console.log('Using dynamic images');
    return dynamicImages;
  }
  
  // Fallback to manual loading
  console.log('Falling back to manual image loading');
  const manualImages = getManualBannerImages();
  console.log(`Manual images loaded: ${manualImages.length}`);
  
  return manualImages;
};
