import mockImg2 from '@/assets/mockImg2.jpg';
import mockImg3 from '@/assets/mockImg3.jpg';
import mockImg4 from '@/assets/mockImg4.jpg';
import mockImg5 from '@/assets/mockImg5.jpg';
import mockImg6 from '@/assets/mockImg6.jpg';
import mockImg7 from '@/assets/mockImg7.jpg';
import mockImg1 from '@/assets/mockImg1.jpg';
import mockImg8 from '@/assets/mockImg8.jpg';
import mockImg9 from '@/assets/mockImg9.jpg';
import mockImg11 from '@/assets/mockImg11.jpg';
import mockImg10 from '@/assets/mockImg10.jpg';
import { motion } from 'framer-motion';

export default function GalleryContainer() {
  return (
    <div className="xl:columns-3 columns-2">
      <motion.div
        initial={{ scale: 0.5, rotate: 10, x: -400 }}
        whileInView={{ scale: 1, rotate: 360, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 3,
          delay: 0.5,
          type: 'spring',
          bounce: 0.5,
          stiffness: 450,
        }}
      >
        <img alt="" className="p-4 hover:brightness-200" src={mockImg2} />
      </motion.div>
      <motion.div
        initial={{ scale: 0.5, rotate: 10, y: 500 }}
        animate={{ scale: 1, rotate: 360, y: 0 }}
        transition={{ duration: 4, delay: 0.5 }}
      >
        <img alt="" className="p-4 hover:brightness-200" src={mockImg3} />
      </motion.div>
      <div className="">
        <img alt="" className="p-4 hover:brightness-200" src={mockImg4} />
      </div>
      <div>
        <img alt="" className="p-4 hover:brightness-200" src={mockImg5} />
      </div>
      <motion.div
        initial={{ scale: 0.5, rotate: 10, y: -400 }}
        whileInView={{ scale: 1, rotate: 360, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 5, delay: 0.5 }}
      >
        <img alt="" className="p-4 hover:brightness-200" src={mockImg6} />
      </motion.div>
      <motion.div
        initial={{ scale: 0.5, rotate: 10, y: 500 }}
        animate={{ scale: 1, rotate: 360, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <img alt="" className="p-4 hover:brightness-200" src={mockImg7} />
      </motion.div>
      <motion.div
        initial={{ scale: 0.5, rotate: 10, y: -400, x: 400 }}
        whileInView={{ scale: 1, rotate: 360, y: 0, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 6, delay: 0.5 }}
      >
        <img alt="" className="p-4 hover:brightness-200" src={mockImg1} />
      </motion.div>
      <motion.div
        initial={{ scale: 0.5, rotate: 10, x: -500 }}
        whileInView={{ scale: 1, rotate: 360, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img alt="" className="p-4 hover:brightness-200" src={mockImg8} />
      </motion.div>
      <motion.div
        initial={{ scale: 0.5, rotate: 10, x: 500 }}
        animate={{ scale: 1, rotate: 360, x: 0 }}
        transition={{ duration: 8, delay: 0.5 }}
      >
        <img alt="" className="p-4 hover:brightness-200" src={mockImg9} />
      </motion.div>
      <motion.div
        initial={{ scale: 0.5, x: 500 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ duration: 7, delay: 0.5 }}
      >
        <img alt="" className="p-4 hover:brightness-200" src={mockImg10} />
      </motion.div>
      <motion.div
        initial={{ scale: 0.5, rotate: 10, x: -500 }}
        whileInView={{ scale: 1, rotate: 360, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img alt="" className="p-4 hover:brightness-200" src={mockImg11} />
      </motion.div>
    </div>
  );
}
