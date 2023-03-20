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

export default function GalleryContainer() {
  return (
    <div className="xl:columns-3 columns-2">
      <div>
        <img alt="" className="p-4 hover:brightness-200" src={mockImg2} />
      </div>
      <div className="">
        <img alt="" className="p-4 hover:brightness-200" src={mockImg3} />
      </div>
      <div className="">
        <img alt="" className="p-4 hover:brightness-200" src={mockImg4} />
      </div>
      <div>
        <img alt="" className="p-4 hover:brightness-200" src={mockImg5} />
      </div>
      <div>
        <img alt="" className="p-4 hover:brightness-200" src={mockImg6} />
      </div>
      <div>
        <img alt="" className="p-4 hover:brightness-200" src={mockImg7} />
      </div>
      <div>
        <img alt="" className="p-4 hover:brightness-200" src={mockImg1} />
      </div>
      <div>
        <img alt="" className="p-4 hover:brightness-200" src={mockImg8} />
      </div>
      <div>
        <img alt="" className="p-4 hover:brightness-200" src={mockImg9} />
      </div>
      <div>
        <img alt="" className="p-4 hover:brightness-200" src={mockImg10} />
      </div>
      <div>
        <img alt="" className="p-4 hover:brightness-200" src={mockImg11} />
      </div>
    </div>
  );
}
