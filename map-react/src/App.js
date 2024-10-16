import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Kakao Maps API가 로드되었을 때 지도 초기화
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=3e8d52a283db7d15b3c14ad5fcbafa61&autoload=false`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        var container = document.getElementById('map'); // 지도를 표시할 DOM 요소
        var options = {
          center: new window.kakao.maps.LatLng(37.402700, 126.922186), // 중심 좌표
          level: 3 // 확대 수준
        };

        var map = new window.kakao.maps.Map(container, options); // 지도 생성

        // 마커를 추가하는 예시
        var markerPosition  = new window.kakao.maps.LatLng(37.402700,126.922186); 
        var marker = new window.kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map); // 마커를 지도에 추가
      });
    };
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행됨

  return (
    <div>
      <h1>Kakao Map Example</h1>
      <div id="map" style={{ width: '500px', height: '400px' }}></div> {/* 지도 표시 영역 */}
      <img src="/path_to_image/your_image.jpg" alt="Example" /> {/* 이미지 경로 확인 */}
    </div>
  );
}

export default App;
