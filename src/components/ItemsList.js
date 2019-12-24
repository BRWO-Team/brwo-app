import React from 'react';
import Item from './Item';

class ItemsList extends React.Component {
  render() {
    let items = [
      <Item
        key={0}
        color={'bg-primary'}
        category={'Blue'}
        title={'Test1'}
        image={
          'data:image/jpeg;base64,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'
        }
      />,
      <Item
        key={1}
        color={'bg-primary-2'}
        category={'Red'}
        title={'Test2'}
        image={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsW6VrTCUaPJijO5fxqi6tgHDkRoK_14BFiJ0TbbXGY54XNOb&s'
        }
      />,
      <Item
        key={2}
        color={'bg-primary-2'}
        category={'Red'}
        title={'Test3'}
        image={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_9AyhvvijRTo3CXoqGy2mhJjT0xiyf4Xe3L1o1WrH-wKHYfE3&s'
        }
      />,
      <Item
        key={3}
        color={'bg-primary-3'}
        category={'Green'}
        title={'Test4'}
        image={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7XYitbZMUa-mfARt7U8RK0Cbv9hzPiEUbK5FOi9T9cRy_G18q&s'
        }
      />,
      <Item
        key={4}
        color={'bg-primary'}
        category={'Blue'}
        title={'Test5'}
        image={
          'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHEBUTBwgVFhUXGBcbGRgYFxsbFxoYFhMXFhcVFhgdHiwjHh0lGxYVIzElJSkrMC8wGh81OjMsOCgtLisBCgoKDg0OGhAPGisaHR8tNC0tLTA1Ny0tLTUtNy8tLjctLS03Ky01LTMrLS0tLS0tLSs3MC0rLTctLTg1LTItLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcIAQL/xAA+EAACAQMCAgYHBQYGAwAAAAAAAQIDBBEFIRIxBgdBUWFxEyIyM4GRsUJyobLBFDRDgsLhI0VSYpLRg6LS/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIhEBAAIBAwQDAQAAAAAAAAAAAAECEQMxQQQSFCEjUWET/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGK4uKNrFzuasYxXOUmkl5tgZQVe66fdH6DxTuZVH/sg2v+Twn8zBLrH6P0+D9onVh6TPDmm29nhpxhlr4oC3g1tPv7TUYKdlXU4vtXg8PKe6eU1hmyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD42lzA17y6jbLllvkv1fgVbWralrCxqVNSSlGSXLH2Wk1ulumb9zcqtJyb8vLsR8jb1bjHo6Taez8ns9xkR1HS9OtlijY01/Im/m1k0o1dFuKno4UKbbXL0eE9nLC2w9ot7d2/YTVxb1qPvIPbm8bfMpd5Cpp15xSnmLkmljGHhveTeM4c0vBJbFRPajrVTR5QVG0XBjbhfC14JYx8Niw6P0it76OZS83ycfvx7PPdPvKz0hoKvRUl2P8GQlm3TacJOLXJrZr+3hyfiB12MlJZi8o+lH07Wrq096srtlFZT+9SXb4w/4lkstbtrlZcljvi+KOe5tbp+DSCpQGOFejU93Vi/Jp7GQgAAAAAAAAAAAAAAAAAAAAAAAAH5nFTTT7Vj5n6AGtQsLah7FJeb3+psgACqdJtOs4VYTdtly5Y23g21zaX2n82WsjOkFB1aLcU8xaltnlya2eeT8eXJgU3XtRhplnOpc2knjC4ItZ3lhPi5JcnnGxU7bWKt1QVTTv2dOUW0l6/A19mrObw02serGP6q7a3ZxvrecakeaefisP5c/gcnsXcQU414ScoS44ueFHZ7yUY7qEZJ8s+XdSHTLa/V/St6tOVPFRVKc1D2VVhipDh25ul6TPku4yypx4lJLEuWVtLHmtyv9H9Qp0bO4/aK0lClKFenKXBGLUZcbp0ord8VOUoZx2dnJWWupU2vRw4syS802BTOsqVSj+zzpSzP10nyfCuF7SW/N9ueZAWXTHXbLaOoXEfDi418pf8ARJ9aNzD0tFKruozb7HlyjzXPOxUKNw5ySlcJJtJtvkm+b8j36Mz2Rn2krpb9ZGtx9rXF/wCSivqoG/T6y9eXsX1pPzWPrKJTb2hRoe4vqNVeDSfKTzzx9l8nnLXes5Y6FWuIcVO3pvKTWG87wU+1JZw8c+aZr4+awi8UuszpCvbsbea/2KT+lRm1DrYuKf71pEV/PKP1izlt5pVS1WbizlFZxl5Uc92cNZP3badqlWHHY0rhwy1mHrLMVxNc+xbjs0Z3gdZpdbdi/e6fjyqp/WKNqHWxof8AEt6q8lF/1HGKy1GhtXdSOMN8dJ5w+Te3g/kYlXry5SpPzp4/Qfx0Z4V3Ol1qdGp+260fOnn6Nm7R6xuitX/M8fep1F/ScBVWo+dCi/KWPoz7mf2tPXwlL9WTx9H7keiqXTPo1V9nW6K+9NR/Ng36Gt6Tc/u+qUZfdqwf0Z5lc6a9qzq/CUf/AJZ8c7d+1GpH+VS/6M+Lp8WHqiE4VN4ST8nk/R5Wp1rek807qUX3+j4fpI36GuahS/d+kE4+VWqvoSejjiw9NA88WvTjpNaPNLXeLwlKEvzrJ0boj1g1rydOj0itVSlV91Vj7qo+XDzaUuXJvd422zxv016xndXQQAecAAAAAABlYuLzUam1zXdPn6sI8O3jJ5fxi4gWK5ube1XFdV4wXfJpL5sg7rpRo9xGrC2ulOSi8rheN3w82uF7tEXKnSWXTppyx7Usyl8Zyy38WYNU0Sz1LLlFwm8PjhtLOMPPZLdPZ5ED82yjW4XFxaWU1nGE4tcotpv1ns0vJYRWtW6F06Ep3FPUoJSksx9A5yblu4r/ABUnusp+qlu9yxaLbVbD/CuaynjPC12rdrKa2axJYUvh3b+oUI1qUklvjK+AFU0TTqFm3JQ4pyWHOeJTcU21FLHBFLL5Ryv9TLJTj6TsyfNA0C4u0pV/Vj+L8kXK1sre1WKVP49vzLkcU6wdM1nVbqFOzsa9SMKceUJSipSlJ+1jnjHb2kBHq/6Ty/yafxSX9R6SB2r1FqxiDDzNddCekNqs1tGq48Iyf0yRNS0uLR4qUZwfxT7H+i+R6vMdahRrrFelGS7pJNfibjqp5hMPKdWrVrR4bi5quOc4cpNZ79/MnNI1x2trK0zbzoz4uNVFUU25Y3447JrhjhrlhHd7zod0cvPfaPS/ljwflwQd51V9Grn3cKkPuzyv/ZM35FJ3gwoa6RyqOtKjaJTrQhBzo3aUoqnHhj6NTh6rXPvy8m1U6RWrSVzoFWolwYUowmo+jpYi087tzzlPsk+7DlrzqZtZfueqNeEofqpfoQ1x1Ra5b72d5Tl5Taf4xx+I7tKV9IbQL/SKFtGHSG1j6V1cSfBUU1SkvWnxRWMptYisYS5N85qNDobcTeLyMeFR4kqsoU8Ock6kJ1N5SjBJuKfPvI2v0J6a2n8Kq14TUvwjJ/QhrvRNet97vTZrxdNx/HBvFJ2si1w6LWtaso2t7J0vRKXHx05N1M7xSWOGKju29stLKKXqFzV0+rKncQw1y4ksuL3i3htLKaeMs1KlrV/iW30f1RjnRT95Rfnh/ozcU/cjZhfxrPCivkfrT9Peq1406UVmUoxWdlmTSWX3b/U0EqdF8VPmuzff8DJY3Nxb1FKnUUG3tJ5xFvKy8brnzW67DXbiPQ6prvVbYaXYVatO8brUqcp7xiqUnGOeHGOJZxhetzOXWtxUcYKhUcYVJJuGdlJPHEvFd5NaxrfSvXoujrOu0/QR9pqVJRmlvzprNSXcu/mkfOiGgVNfu4UdOg/RQllza5QUval2Zfd3nOndWJm8j0LoN5K/tqdSfNxw8/6otxk/mmb5joUadvFRpRwopJLwRkPnSoAAAAAGOtQpV1irBMyACLraLSl7qo157mtLS7mjHZqWG+Wc4f8AdL8SdAFSt9GVnl2dgo5cnLhhjMpPicn3vP1N5aTeVVh1Iwz285LvwuWfiT4A+RSitj6AAAAAAAAAAAAAAAYK9na3H7xbQl96Kf1RG1+imgV/b0mkvux4fy4JkFiZjYVO46uujdX2LSUfKpJ/mbI2v1UaJU9i6rLzcH/Qi/A1GpeORzuh1P8AR+DzVuK0l3Zil+UuujaNp+iU/R6XaxhHtxzb75Se7fmb4Ja9rbyAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z'
        }
      />,
      <Item
        key={5}
        color={'bg-primary-3'}
        category={'Green'}
        title={'Test6'}
        description={'This is a basketball'}
        image={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzb8x7wP93DrIuseB1wTj0FPWpdFflQbRuuyBsoIU3-gW8Ct0X&s'
        }
      />
    ];

    return (
      <div className='itemsList'>
        <section>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col'>
                <h2>Filtering</h2>
                <div className='row'>
                  <div className='col'>
                    <ul
                      data-isotope-filters
                      data-isotope-id='example-2'
                      className='nav mb-3'
                    >
                      <li key={0} className='nav-item'>
                        <div className='nav-link active' data-filter='*'>
                          All
                        </div>
                      </li>
                      <li key={1} className='nav-item'>
                        <div className='nav-link' data-filter='Blue'>
                          Blue
                        </div>
                      </li>
                      <li key={2} className='nav-item'>
                        <div className='nav-link' data-filter='Red'>
                          Red
                        </div>
                      </li>
                      <li key={3} className='nav-item'>
                        <div className='nav-link' data-filter='Green'>
                          Green
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className='row'
                  data-isotope-collection
                  data-isotope-id='example-2'
                >
                  {items}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ItemsList;
