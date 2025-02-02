const SearchFilter = () => {
  return (
    <div className="container container-1400">
      <div
        className="search-filter-inner"
        data-aos="zoom-out-down"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="filter-item clearfix">
          <div className="icon">
            <i className="fal fa-map-marker-alt" />
          </div>
          <span className="title">Destinations</span>
          <select name="city" id="city">
            <option value="value1">City or Region</option>
            <option value="value2">City</option>
            <option value="value2">Region</option>
          </select>
        </div>
        <div className="filter-item clearfix">
          <div className="icon">
            <i className="fal fa-flag" />
          </div>
          <span className="title">All Activity</span>
          <select name="activity" id="activity">
            <option value="value1">Choose Activity</option>
            <option value="value2">Daily</option>
            <option value="value2">Monthly</option>
          </select>
        </div>
        <div className="filter-item clearfix">
          <div className="icon">
            <i className="fal fa-calendar-alt" />
          </div>
          <span className="title">Departure Date</span>
          <select name="date" id="date">
            <option value="value1">Date from</option>
            <option value="value2">10</option>
            <option value="value2">20</option>
          </select>
        </div>
        <div className="filter-item clearfix">
          <div className="icon">
            <i className="fal fa-users" />
          </div>
          <span className="title">Guests</span>
          <select name="cuests" id="cuests">
            <option value="value1">0</option>
            <option value="value2">1</option>
            <option value="value2">2</option>
          </select>
        </div>
        <div className="search-button">
          <button className="theme-btn">
            <span data-hover="Search">Search</span>
            <i className="far fa-search" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchFilter;
