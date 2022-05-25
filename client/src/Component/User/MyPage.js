// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import firebase from '../../firebase';

// import Avatar from 'react-avatar';

// function MyPage() {
//   const user = useSelector((state) => state.user);
//   const navigate = useNavigate();

//   const [CurrentImage, setCurrentImage] = useState('');

//   useEffect(() => {
//     if (user.isLoading && !user.accessToken) {
//       navigate('/login');
//     } else {
//       setCurrentImage(user.photoURL);
//     }
//   }, [user, navigate]);

//   const ImageUpload = (e) => {
//     // console.log(e.target.files);
//     var formData = new FormData();
//     formData.append('file', e.target.files[0]);
//     axios.post('/api/user/profile/img', formData).then((response) => {
//       console.log(response.data);
//       setCurrentImage(response.data.filePath);
//     });
//   };

//   const SaveProfile = async (e) => {
//     e.preventDefault();
//     try {
//       await firebase.auth().currentUser.user.updateProfile({
//         photoURL: CurrentImage,
//       });
//     } catch (error) {
//       return alert('프로필 변경에 실패하였습니다.');
//     }

//     let body = {
//       photoURL: CurrentImage,
//       uid: user.uid,
//     };

//     axios.post('/api/user/profile/update', body).then((response) => {
//       if (response.data.success) {
//         alert('프로필 변경에 성공하였습니다');
//         window.location.reload();
//       } else {
//         return alert('프로필 변경에 실패하였습니다.');
//       }
//     });
//   };

//   return (
//     <div>
//       <form
//         style={{
//           width: '50%',
//           margin: '0 auto',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           marginTop: '2rem',
//         }}
//       >
//         <label>
//           <input
//             type='file'
//             accept='image/*'
//             style={{ display: 'none' }}
//             onChange={(e) => {
//               ImageUpload(e);
//             }}
//           />
//           <Avatar
//             size='100'
//             round={true}
//             src={CurrentImage}
//             style={{ border: '1px solid #c6c6c6', cursor: 'pointer' }}
//           />
//         </label>
//         <button onClick={(e) => SaveProfile(e)}>저장</button>
//       </form>
//     </div>
//   );
// }

// export default MyPage;
