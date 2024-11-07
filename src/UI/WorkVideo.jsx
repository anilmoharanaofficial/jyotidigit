import styled from "styled-components";
import ReactPlayer from "react-player";
import { CiPlay1 } from "react-icons/ci";
import { useState } from "react";

const Card = styled.div`
  width: 300px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;

  @media (max-width: 768px) {
    width: 400px;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    height: 500px;
  }
`;

const TextContainer = styled.div`
  margin-top: 20px;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Name = styled.p`
  font-weight: bold;
  margin: 0;
`;

const Position = styled.p`
  font-size: 0.8em;
  color: #aaa;
  margin: 0;
`;

const WorkVideo = ({
  videoUrl,
  thumbnailUrl,
  imageUrl,
  name,
  position,
  testimonial,
}) => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const handlePlay = () => {
    setPlaying(true);
    setMuted(false);
  };

  return (
    <Card>
      <VideoWrapper>
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          playing={playing}
          muted={muted}
          controls={true}
          light={thumbnailUrl}
          playIcon={<CiPlay1 size={48} color="white" />}
          onClickPreview={handlePlay}
        />
      </VideoWrapper>
      <TextContainer>
        <p>{testimonial}</p>
        <ProfileInfo>
          <ProfileImage src={imageUrl} alt={name} />
          <div>
            <Name>{name}</Name>
            <Position>{position}</Position>
          </div>
        </ProfileInfo>
      </TextContainer>
    </Card>
  );
};

export default WorkVideo;
