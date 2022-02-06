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
    view: statData.viewCount,
    like: statData.likeCount,
    comment: statData.commentCount
  }
  let json = JSON.stringify(videoStat)
  Logger.log(json);
}
