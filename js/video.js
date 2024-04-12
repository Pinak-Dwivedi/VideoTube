const videosSection = document.querySelector("[data-videos-section]");

const videoCardTemplate = document.querySelector("[data-video-card-template]");

const videoData = {
  image: "./images/video-thumbnail.jpg",
  accountImage: "./images/channel1.png",
  title: "Video Title",
  channelTitle: "Channel Title",
  channelInfo: "1.5M views · 1 year ago",
};

const VIDEOS_COUNT = 18;

for (let i = 0; i < VIDEOS_COUNT; i++) {
  // clone template
  const videoCardClone = videoCardTemplate.content.cloneNode(true);

  const videoCard = videoCardClone.querySelector("[data-video-card]");

  const videoCardImage = videoCard.querySelector("[data-video-card-image]");

  videoCardImage.src = videoData.image;
  videoCardImage.alt = "video";

  const videoInfo = videoCard.querySelector("[data-video-info]");

  const videoChannelLogo = videoInfo.querySelector("[data-video-channel-logo]");

  videoChannelLogo.src = videoData.accountImage;
  videoChannelLogo.alt = "account";

  const videoInfoContent = videoInfo.querySelector("[data-video-info-content]");

  const videoTitle = videoInfoContent.querySelector("[data-video-title]");

  videoTitle.textContent = videoData.title;

  const videoChannelInfo = videoInfoContent.querySelector(
    "[data-video-channel-info]"
  );

  const channelTitle = videoChannelInfo.querySelector("[data-channel-title]");

  channelTitle.textContent = videoData.channelTitle;

  const channelInfo = videoChannelInfo.querySelector("[data-channel-info]");

  channelInfo.textContent = videoData.channelInfo;

  videosSection.append(videoCard);
}
