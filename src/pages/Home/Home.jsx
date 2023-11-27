import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPost } from "../../reducers/Layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";

function Home () {

  const data = useSelector((state)=>state.layout.data)

  const dispatch = useDispatch()


  const PostImagesApi = "http://65.108.148.136:8085/images"; 

  useEffect(()=>{
    dispatch(getPost())
  },[dispatch])

  return (
    <div onClick={() => (modalMore = false)} className="mx-[auto] p-[20px]">
      {
        data.map((elem)=>{
          return (
            <div className="" >
              {/* <h1>{elem.postId}</h1>   */}
              <div className=" flex justify-center w-[900px]">
                <div>
                  <div className=" flex items-center">
                    <img className=" w-[50px]" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" />
              <h1>{elem.title}</h1>
                  </div>
              {elem.images.map((ell,i) => {
                        return (
                          <SwiperSlide className=" rounded-xl">
                               {elem.images.map((imgX, i) => {
                  return (
                    <div key={i} className="">
                      {!imgX.includes(".mp4") ? (
                         <img
                         width={450}

                         className="rounded object-cover bg-[black] "
                         src={`${PostImagesApi}/${ell}`}
                         alt="img"
                       />
                      ) : (
                        <video
                        width={451}
                        controls
                        className=" bg-black"
                          src={`${import.meta.env.VITE_APP_FILES_URL}${
                            elem.images[0]
                          }`}
                        />
                      )}
                    </div>
                  );
                })}        
                          </SwiperSlide>
                        );
                      })}
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
  }

export default Home;
