import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Modal from 'react-modal';
import Image from 'next/image';

// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination]);

// Define the type for the images array
type ImageType = {
  src: string;
  alt: string;
};

const ImageSlider: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  // Dynamically set the app element for react-modal after the component mounts
  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

  const images: ImageType[] = [
    { src: '/img/roopal-images/img1.jpg', alt: 'Image 1' },
    { src: '/img/roopal-images/img1.jpg', alt: 'Image 2' },
    { src: '/img/roopal-images/img1.jpg', alt: 'Image 3' },
    { src: '/img/roopal-images/img1.jpg', alt: 'Image 4' },
    { src: '/img/roopal-images/img1.jpg', alt: 'Image 5' },
  ];

  const openModal = (image: ImageType) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container mt-5">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => openModal(image)}
              style={{ cursor: 'pointer', position: 'relative', width: '100%', height: '200px' }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="img-fluid"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal-dialog modal-lg"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Image Preview</h5>
            <button type="button" className="close" onClick={closeModal}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {selectedImage && (
              <div style={{ position: 'relative', width: '100%', height: '80vh' }}>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ImageSlider;