import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import Image from 'next/image';


export default function GalleryComponent() {
  const gallery =  {
    galleryID:"abot-gallery",
    images:[
    {
      largeURL:
        '/images/gallery.png',
      thumbnailURL:
        '/images/gallery.png',
      width: 1875,
      height: 2500,
    },
    {
      largeURL:
        '/images/gallery.png',
      thumbnailURL:
        '/images/gallery.png',
      width: 1669,
      height: 2500,
    },
    {
      largeURL:
        '/images/gallery.png',
      thumbnailURL:
        '/images/gallery.png',
      width: 2500,
      height: 1666,
    },{
      largeURL:
        '/images/gallery.png',
      thumbnailURL:
        '/images/gallery.png',
      width: 2500,
      height: 1666,
    },{
      largeURL:
        '/images/gallery.png',
      thumbnailURL:
        '/images/gallery.png',
      width: 2500,
      height: 1666,
    },{
      largeURL:
        '/images/gallery.png',
      thumbnailURL:
        '/images/gallery.png',
      width: 2500,
      height: 1666,
    },{
      largeURL:
        '/images/gallery.png',
      thumbnailURL:
        '/images/gallery.png',
      width: 2500,
      height: 1666,
    },{
      largeURL:
        '/images/gallery.png',
      thumbnailURL:
        '/images/gallery.png',
      width: 2500,
      height: 1666,
    },
  ]}
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#abot-gallery',
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
          <Image src={image.thumbnailURL} alt="" width={262} height={262}/>
        </a>
      ))}
    </div>
  );
};