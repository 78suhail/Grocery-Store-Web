import HomeSlider from '@/components/HomeSlider';
import CatSlider from '@/components/CatSlider';
import PopularProducts from '@/components/PopularProducts';
import Banners from '@/components/Banners';
import ProductRow from '@/components/ProductRow';

export default function Home() {
  return (
<>
<div className='sliderwrapper py-5'>
  <HomeSlider />
  <CatSlider/>
  <PopularProducts/>
  <Banners/>
  <ProductRow title={"Latest Products"}/>
 <ProductRow title={"Featured Products"}/>
 <ProductRow title={"Breaksfast & Dairy"}/>

</div>
</>
  );
}
