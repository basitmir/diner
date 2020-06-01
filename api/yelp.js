import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",

  headers: {
    Authorization:
      "Bearer yhtnx1ihfkiQlh5AmPAVlw0sYhXFfvroLhbHItzbxIels2l-oirXa_mIwXuKl-qbaY0eT4Ai-a8gEFPIGIEGdlywpDe4oInQm20AatPqeEJEOb2n_wMA6T5q9BugXnYx",
  },
});
