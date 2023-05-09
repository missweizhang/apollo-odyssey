const { RESTDataSource } = require("@apollo/datasource-rest");

class TrackAPI extends RESTDataSource {
  baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

  getTracksForHome() {
    return this.get("tracks");
  }

  getTrack(trackId) {
    return this.get(`track/${trackId}`);
  }

  getTrackModules(trackId) {
    return this.get(`track/${trackId}/modules`);
  }

  getAuthor(authorId) {
    return this.get(`author/${encodeURIComponent(authorId)}`);
  }

  getModule(moduleId) {
    return this.get(`module/${encodeURIComponent(moduleId)}`);
  }

  incrementTrackViews(trackId) {
    return this.patch(`track/${encodeURIComponent(trackId)}/numberOfViews`);
  }
}

module.exports = TrackAPI;
