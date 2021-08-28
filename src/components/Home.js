import useLocalStorage from "./hooks/storageHooks/useLocalStorage";
import { Avatar } from "@material-ui/core/";
import PictureCompress from "./profilePictureResize/PictureCompress";

const Home = () => {
  //  Use LocalStorage custom hook for getting the  cropped picture
  const [croppedImg] = useLocalStorage({}, "imgBase64Cropped");
  // Use LocalStorage for getting the style of picture
  const [ImageStyle] = useLocalStorage({}, "styleImg");
  return (
    <div>
      <header className="App-header">
        <h1>Upload image profil component</h1>
        <sub>Upload, compress, crop & add filters to images</sub>
        <br />
        <div className="EditProfileLover__imageContainer">
          {croppedImg.imageDestination && (
            <img
              id="profile-picture"
              src={croppedImg.imageDestination}
              style={ImageStyle}
              alt="profile"
            />
          )}
          {!croppedImg.imageDestination && (
            <Avatar
              id="profile-picture"
              style={{
                width: 253,
                height: 253,
                boxShadow: "7px 7px 21px #808080",
              }}
            />
          )}
        </div>
        <PictureCompress />
      </header>
    </div>
  );
};

export default Home;
