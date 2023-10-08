import image1 from '@/public/hero/bg.png'
import image2 from '@/public/hero/bg.png'
import image3 from '@/public/hero/bg.png'
import image4 from '@/public/hero/bg.png'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex