import { useState, useEffect } from 'react';

const ActingCredit = ({ role }) => {
  const [activeClip, setActiveClip] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const onClickClipHandler = (clipName) => {
    setActiveClip((prevClip) => (prevClip === clipName ? null : clipName));
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`flex flex-col w-full p-2 ${isVisible ? 'fly-in-right' : ''}`}
    >
      <div className="flex flex-row items-center justify-between space-x-4">
        <p className="credit-title">{role.title}</p>
        <p className="role">{role.role}</p>
        <p className="production-company">{role.productionCompany}</p>
        <div className="w-1/6">
          {role.clipName ? (
            <button
              className="btn"
              onClick={() => onClickClipHandler(role.clipName)}
            >
              {activeClip ? 'Hide' : 'View'}
            </button>
          ) : (
            <div className="invisible">&nbsp;</div>
          )}
        </div>
      </div>
      {activeClip === role.clipName && (
        <div className="flex flex-col items-center justify-center mt-5">
          <video
            controls
            autoPlay
            width="100%"
            className="video-reel-player"
            src={role.clipName}
          ></video>
        </div>
      )}
      <hr className="border-slate-150 mt-2" />
    </div>
  );
};

export default ActingCredit;
