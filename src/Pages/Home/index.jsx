import React from "react"
import "./style.css";
import {
  Stack,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

export default function Home() {
  return (
    <>
    {/* اولین قسمت */}

      <Stack
     
      >
        <Box
          sx={{
            width: "100vw",
            height: "130px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ebebeb",
            display:{
              xs:'none',
              md:'flex',
              lg:'flex'
            }
          }}
        >
          <Box
            sx={{
              width: "50%",
              height: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            component={"img"}
            src="assets/img1.png"
          ></Box>
        </Box>

        {/* دومین قسمت */}
<Box  sx={{
            // height: "700px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width:{
              xs:'100vw'
            },
            // backgroundColor:'red'
          }}>

  
<Box
          sx={{
            height: {
              xs:'700px',md:"600px",lg:'700px',
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap:{
              xs:"0px",
              md:'25px',
              lg:'0px'
            },
            flexDirection:{
              xs:'column-reverse',
              md:'row',
              lg:'row'
            },
          
            width:{
              xs:'90vw'
            },
            // backgroundColor:'#ccc'
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap:{
                xs:'5px',
                md:"15px",
                lg:'15px'
              },
              paddingLeft:{
                xs:"0px",
                md:'0px',
                ld:'250px'
              },
              height:{
                xs:'30%',
                md:'600px',
                lg:'600px'
              },
              width:{
                xs:'100vw',
                md:'50%',
                lg:'50%'
              },
// backgroundColor:'red'
            }}
          >
            <Typography variant="subtitle1" component={"div"} size="small">
              COVER STORY
            </Typography>
            <Typography
              className="title"
              variant="h3"
              component={"div"}
              sx={{ textAlign: "center"}}
            >
              Anok Yai Is One of
              <br /> One
            </Typography>
            <Typography
              variant="body1"
              component={"div"}
              sx={{ textAlign: "center", fontSize: "18px" }}
            >
              The supermodel never really cared to fit in. Now <br />
              she’s reaping the rewards.
            </Typography>
            <Typography
              variant="body1"
              component={"div"}
              sx={{ textAlign: "center", fontSize: "13px",
                display:{
                xs:'none',
                md:"flex",
                lg:'flex'
              }
             }}
            >
              BY JULIANA UKIOMOGBE AND PHOTOGRAPHED BY MARIO
              <br /> SORRENTI. STYLED BY ALEX WHITE.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent:'center',
              objectFit:'cover',
              height:{
                xs:'68%',
                md:'425px',
                lg:'600px'
              },
              width:{
                xs:'100vw',
                  md:'50%',
                  lg:'50%'
              }
            }}
          >
            <Box
              sx={{
                color: "transparent",
                height: "100%",
                // width:{
                //   xs:'100vw',
                //   md:'78%',
                //   lg:'78%'
                // }
                objectFit:"cover"
              }}
              component={"img"}
              src="assets/lisa.avif"
            ></Box>
          </Box>
        </Box>
</Box>
        {/* <Box>
          <Swiper
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Parallax,
              Pagination,
            ]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={true}
          >
            <div
              slot="container-start"
              className="parallax-bg"
              style={{
                backgroundImage:
                  "url(https://swiperjs.com/demos/images/nature-1.jpg)",
              }}
              data-swiper-parallax="-23%"
            ></div>
            <SwiperSlide>
              <div className="title" data-swiper-parallax="-300">
                Slide 1
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </SwiperSlide>
            <div
              slot="container-start"
              className="parallax-bg"
              style={{
                "background-image":
                  "url(https://swiperjs.com/demos/images/nature-1.jpg)",
              }}
              data-swiper-parallax="-23%"
            ></div>
            <SwiperSlide>
              <div className="title" data-swiper-parallax="-300">
                Slide 2
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </SwiperSlide>
            <div
              slot="container-start"
              className="parallax-bg"
              style={{
                "background-image":
                  "url(https://swiperjs.com/demos/images/nature-1.jpg)",
              }}
              data-swiper-parallax="-23%"
            ></div>
            <SwiperSlide>
              <div className="title" data-swiper-parallax="-300">
                Slide 3
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </Box> */}
      </Stack>

      {/* سومین قسمت */}

      <Stack
        sx={{
          width: "100vw",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor:'red'
        }}
      >
        <Box
          sx={{
            width: "80vw",
            height: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor:'green',
            borderTop: "1px solid #b0afaf",
            borderBottom: "1px solid #b0afaf",
          }}
        >
          <Typography variant="h1" component={"div"} sx={{
            fontSize:{
              xs:'50px',
              md:'80px',
              lg:'100px'
            }
          }}>
            SHOPPING
          </Typography>
        </Box>
      </Stack>

      {/* چهارمین قسمت */}

      <Stack
        sx={{
          width: "100vw",
          height:{
            xs:'1700px',
            md:'450px',
            lg:'530px'
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

        }}
      >
        <Box
          sx={{
            width: "80vw",
            height:{
              xs:'1600px',
              md:'500px',
              lg:'500px'
            },
            display: "flex",
            flexDirection:{
              xs:'column',
              md:"row",
              lg:'row'
            },
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: "300px",
              height: "400px",
            }}
          >
            <Card>
              <CardMedia
                component={"img"}
                image="https://hips.hearstapps.com/hmg-prod/images/1-1dd9954b-c40a-42f6-b9bb-9acd88-668eac2abf2bb.jpg?crop=1.00xw:0.668xh;0,0.0588xh&amp;resize=360:*"
                alt="a woman in a white linen dress by posse standing next to a bicycle"
                title="a woman in a white linen dress by posse standing next to a bicycle"
              />
              <CardContent>
                <Typography>30 Linen Dresses That Feel Like Nothing</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              width: "300px",
              height: "400px",
            }}
          >
            <Card>
              <CardMedia
                component={"img"}
                image="https://hips.hearstapps.com/hmg-prod/images/mathilde-red-gingham-4940-668d824455f6a.jpg?crop=1.00xw:0.876xh;0,0&amp;resize=360:*"
                alt="best raffia tote bags"
                title="best raffia tote bags"
              />
              <CardContent>
                <Typography>
                  16 Best Raffia Totes to Channel Summer Every Day
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              width: "300px",
              height: "400px",
            }}
          >
            <Card>
              <CardMedia
                component={"img"}
                image="https://hips.hearstapps.com/hmg-prod/images/1-elm060124fobshop-001-667b3601d6517.jpg?crop=1.00xw:0.668xh;0,0.186xh&amp;resize=360:*"
                alt="a person lying on a concrete ledge next to a body of water"
              />
              <CardContent>
                <Typography>Suit Up: ELLE’s July Shopping Guide</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              width: "300px",
              height: "400px",
            }}
          >
            <Card>
              <CardMedia
                component={"img"}
                image="https://hips.hearstapps.com/hmg-prod/images/zara-long-crochet-dress-66855ef1f1d21.jpg?crop=1.00xw:0.669xh;0,0.0566xh&amp;resize=360:*"
                alt="a person standing in a dress"
              />
              <CardContent>
                <Typography>
                  Summer Dresses That Give Effortlessly Chic Vibes
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Stack>

      {/* پنجمین قسمت */}

      <Stack
        sx={{
          width: "100vw",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor:'red'
        }}
      >
        <Box
          sx={{
            width: "80vw",
            height: "180px",
            borderBottom: "1px solid #b0afaf",
            borderTop: "1px solid #b0afaf",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" component={"div"} sx={{
             fontSize:{
              xs:'50px',
              md:'80px',
              lg:'100px'
            }
          }}>
            CULTURE
          </Typography>
        </Box>
      </Stack>

      {/* 6قسمت */}

      <Stack
        sx={{
          width: "100vw",
          height: "650px",
          display: "flex",
          alignItems: "center",
          justifyContent:'center',
          // backgroundColor: "red",
        }}
      >
        <Box
          sx={{
            width: "80vw",
            height: "600px",
            display: "flex",
            justifyContent: "space-between",
            // backgroundColor: "blue",
            
          }}
        >
          <Box
            sx={{
              // width: "50vw",
              height: "600px",
              

            }}
          >
            <Box
              sx={{
                // width: "50vw",
                height: "400px",
                width:{
                  xs:'100%',
                  md:"50vw"
                }
              }}
              component={"img"}
              src="https://hips.hearstapps.com/hmg-prod/images/elm080124ppannamarietendler-001-667d801a38dd6.jpg?crop=0.670xw:1.00xh;0.167xw,0&amp;resize=480:*"
              alt="a woman in a dress standing in a room with pink doors"
              ></Box>
            <Box 
            sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              textAlign:'center',
              flexDirection:'column',
              gap:'20px',
              height:'200px',
              // backgroundColor:'#ccc',
              width:{
                xs:'100%',
                md:"50vw"
              }
            }}
            >
            <Typography variant="h4" component={"div"}>
              Anna Marie Tendler Checks Herself In
            </Typography>
            <Typography variant="body2" component={"div"}>
              In an exclusive excerpt from her highly anticipated memoir Men
              Have Called Her Crazy, Tendler writes about being admitted to a
              mental health facility.
            </Typography>
            <Typography variant="body1" component={"div"}>BY ANNA MARIE TENDLER</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "30vw",
              height: "200px",
              justifyContent: "center",
              alignItems: "center",
              display:{
                xs:'none',
                md:'flex'
              }
            }}
          >
            <Box
              sx={{
                width: "20vw",
                height: "200px",
              }}
              component={"img"}
              src="https://tpc.googlesyndication.com/simgad/14486007734352478124"
            ></Box>
          </Box>
        </Box>
      </Stack>

      {/* 7 قسمت*/}

      <Stack
        sx={{
          width: "100vw",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor:'red'
        }}
      >
        <Box
          sx={{
            width: "80vw",
            height: "180px",
            borderBottom: "1px solid #b0afaf",
            borderTop: "1px solid #b0afaf",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign:'center',
            // backgroundColor:'green'
          }}
        >
          <Typography variant="h1" component={"div"} sx={{
            fontSize:{
              xs:'40px',
              md:'80px',
              lg:'100px'
            }
          }}>
            COVER STORIES
          </Typography>
        </Box>
      </Stack>

      {/* 8 قسمت*/}

      <Stack
        sx={{
          width: "100vw",
          height:{
            xs:'1700px',
            md:'450px',
            lg:'530px'
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor:'red',
        }}
      >
        <Box
          sx={{
            width: "80vw",
            height:{
              xs:'1600px',
              md:'500px',
              lg:'500px'
            },
            display: "flex",
             flexDirection:{
              xs:'column',
              md:"row",
              lg:'row'
            },
            alignItems: "center",
            // backgroundColor:'green',
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: "300px",
              height: "400px",
              //  backgroundColor:'red'
            }}
          >
            <Card>
              <CardMedia
                component={"img"}
                image="https://hips.hearstapps.com/hmg-prod/images/elm080124fobcover-001-667970047d0e6.jpg?crop=1.00xw:0.747xh;0,0.0876xh&amp;resize=360:*"
                alt="hoyeon"
              />
              <CardContent sx={{ height: "88px" }}>
                <Typography>Hoyeon Takes Hollywood</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              width: "300px",
              height: "400px",
            }}
          >
            <Card>
              <CardMedia
                component={"img"}
                image="https://hips.hearstapps.com/hmg-prod/images/elm060124fobcover-001-2-663ceed442616.jpg?crop=0.818xw:0.672xh;0.182xw,0&amp;resize=360:*"
                alt="anya taylor joy 0624 elle"
              />
              <CardContent>
                <Typography>
                  Anya Taylor-Joy on Being ‘Utterly in Love’
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              width: "300px",
              height: "400px",
            }}
          >
            <Card>
              <CardMedia
                component={"img"}
                image="https://hips.hearstapps.com/hmg-prod/images/elm050124fobcover-001-661588f0da735.jpg?crop=1.00xw:0.801xh;0,0.0182xh&amp;resize=360:*"
                alt="dua lipa"
              />
              <CardContent>
                <Typography>
                  Dua Lipa: ‘If It’s Not Fun, I Don’t Want It’
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              width: "300px",
              height: "400px",
            }}
          >
            <Card>
              <CardMedia
                component={"img"}
                image="https://hips.hearstapps.com/hmg-prod/images/elm040124cover-002-65f06b1bdd2cb.jpg?crop=1.00xw:0.747xh;0,0.0437xh&amp;resize=360:*"
                alt="nicole kidman"
              />
              <CardContent>
                <Typography>The Secret Superpower of Nicole Kidman</Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
