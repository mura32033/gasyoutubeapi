function run() {
  getStats("L8hMN2UAPxs");
}

function getStats(vId) {
  let videoInfo = {
    id: vId
  }
  let info = YouTube.Videos.list("snippet", videoInfo);
  let rate = YouTube.Videos.list("statistics", videoInfo);

  let vidData = info.items[0].snippet;
  let statData = rate.items[0].statistics;

  let videoStat = {
    title: vidData.title,
    channel: vidData.channelTitle,
    tags: vidData.tags ? vidData.tags.toString() : null,
    view: parseInt(statData.viewCount),
    like: parseInt(statData.likeCount),
    comment: parseInt(statData.commentCount)
  }
  let json = JSON.stringify(videoStat)
  Logger.log(json);
}
