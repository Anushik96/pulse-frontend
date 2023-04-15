import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';



export default function GalleryComponent() {
  const gallery =  {
    galleryID:"abot-gallery",
    images:[
    {
      largeURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-2500.jpg',
      thumbnailURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/1/img-200.jpg',
      width: 1875,
      height: 2500,
    },
    {
      largeURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-2500.jpg',
      thumbnailURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/2/img-200.jpg',
      width: 1669,
      height: 2500,
    },
    {
      largeURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
      thumbnailURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
      width: 2500,
      height: 1666,
    },{
      largeURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
      thumbnailURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
      width: 2500,
      height: 1666,
    },{
      largeURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
      thumbnailURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
      width: 2500,
      height: 1666,
    },{
      largeURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
      thumbnailURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
      width: 2500,
      height: 1666,
    },{
      largeURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
      thumbnailURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
      width: 2500,
      height: 1666,
    },{
      largeURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg',
      thumbnailURL:
        'https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg',
      width: 2500,
      height: 1666,
    },
  ]}
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + gallery.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className="about__gallery pswp-gallery" id={gallery.galleryID}>
      {gallery.images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={gallery.galleryID + '-' + index}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.thumbnailURL} alt="" />
        </a>
      ))}
    </div>
  );
};