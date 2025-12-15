import React from 'react'

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
    {
        imgUrl: 'src/assets/images/category/01.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'DSLR Camera',
    },
    {
        imgUrl: 'src/assets/images/category/02.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Shoes',
    },
    {
        imgUrl: 'src/assets/images/category/03.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Photography',
    },
    {
        imgUrl: 'src/assets/images/category/04.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Formal Dress',
    },
    {
        imgUrl: 'src/assets/images/category/05.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Colorful Bags',
    },
    {
        imgUrl: 'src/assets/images/category/06.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Home Decor',
    },
]

const Homecategory = () => {
  return <div className='category-section style-4 padding-tb'>
        <div className='container'>
            {/* section header */}
            <div className='section-header text-center'>
                <span className='subtitle'>{subTitle}</span>
                <h2>{title}</h2>
            </div>
            {/* section card */}
             <div className='section-wrapper'>
                <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                    {
                        categoryList.map((val,i) => (<div key={i} className='col'>
                           <a href="/shop" className='category-item'>
                                <div className='category-inner'>
                                    <div className='category-thumb'>
                                       <img src={val.imgUrl} alt="" />
                                    </div>
                                </div>
                            </a>
                        </div>))
                    }
                </div>
            </div> 
        </div>
    </div>
  
}

export default Homecategory;