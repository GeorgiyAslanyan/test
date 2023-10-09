import image1 from '@/public/hero/bg.webp'
import image2 from '@/public/hero/camera.webp'
import image3 from '@/public/hero/compaigns.webp'
import image4 from '@/public/hero/bg.webp'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex