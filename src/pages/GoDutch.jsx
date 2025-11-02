import GoDutchTextLogo from '../assets/images/go-dutch-text-logo.png';
import HomePageScreen from '../assets/images/home-page-screen.png';
import FeaturedRestaurantsScreen from '../assets/images/featured-restaurants-screen.png';
import CreateNewSplitScreen from '../assets/images/create-new-split-screen.png';
import AddDinersScreen from '../assets/images/add-diners-screen.png';
import SelectBirthdaysModal from '../assets/images/select-birthdays-modal.png';
import AssignItems from '../assets/images/assign-items-to-diner-screen.png';
import CloseOutDetails from '../assets/images/close-out-details-screen.png';
import FavoriteDinersScreen from '../assets/images/favorite-diners-screen.png';
import FavoriteRestaurantsScreen from '../assets/images/favorite-restaurants-screen.png';
import ViewUserProfileScreen from '../assets/images/view-user-profile-screen.png';
import GoDutchLogo from '../assets/images/go-dutch-icon.png';
import ReceiptCaptureImage from '../assets/images/receipt-capture-image.png';
import video from '../videos/go-dutch-demo-video.mp4';

const GoDutch = () => {
  console.log("GoDutch component rendered");
  return (
    <div className="app">
      <div className="go-dutch-header">
        <img
          className="text-logo"
          src={GoDutchTextLogo}
          alt="go dutch text logo"
        />

        <div className="video-container">
          <video
            controls
            autoPlay
            width="90%"
            className="video-player"
            src={video}
          ></video>
        </div>
      </div>

      <div className="about-container">
        <div className="section-container">
          <h2 className="about-title">About</h2>
          <img
            className="logo"
            src={GoDutchLogo}
            alt="go dutch logo"
          />
        </div>

        <p className="about-text">
          Tired of the discomfort and awkward shuffle that comes when it's time
          to split the bill? Afraid your celebratory night out with friends will
          become an uncomfortable situation because you don't really care to
          pick up a portion of Jessica's five expresso martinis when you go to
          split the bill?
        </p>
        <br />
        <p className="about-text">
          Enter<span className="title"> Go Dutch!</span>, the app that makes
          sharing, splitting and paying your bill with friends hassle-free!{' '}
          <span className="title"> Go Dutch!</span> let's you say goodbye to the
          headache of dividing the bill manually and allows you to effortlessly
          split the bill with your dining companions by simply taking a photo of
          the receipt, ultimately ensuring everyone pays their fair share, along
          with providing many other user features.
        </p>
      </div>

      <div className="features-container">
        <div className="image-and-info-group">
          <div className="go-dutch-image-container">
            <img
              className="location-screens"
              src={HomePageScreen}
              alt="go dutch app screenshot"
            />
            <img
              className="location-screens"
              src={FeaturedRestaurantsScreen}
              alt="go dutch app screenshot"
            />
          </div>

          <div className="feature-section">
            <div className="section-container">
              <h2 className="features-title">Location Services!</h2>{' '}
              <img
                className="logo"
                src={GoDutchLogo}
                alt="go dutch logo"
              />
            </div>

            <p className="feature-description-text">
              Location-based feature seamlessly integrates with mapping services
              to track your whereabouts, providing real-time suggestions for
              featured restaurants in your vicinity. Whether you're exploring a
              new city or simply seeking local culinary delights, this feature
              ensures you're always presented with the best dining options
              tailored to your location.
            </p>
          </div>
        </div>
      </div>

      <div className="features-container">
        <div className="image-and-info-group">
          <img
            className="screens"
            src={CreateNewSplitScreen}
            alt="go dutch app screenshot"
          />
          <div className="feature-section">
            <div className="section-container">
              <h2 className="features-title">Create A Split!</h2>
              <img
                className="logo"
                src={GoDutchLogo}
                alt="go dutch logo"
              />
            </div>

            <p className="feature-description-text">
              Our integration of Google Places allows us to dynamically fetch a
              list of nearby restaurants, streamlining the create new split bill
              process by automatically populating options based on your
              proximity.
            </p>
          </div>
        </div>
        <div className="image-and-info-group">
          <img
            className="screens"
            src={ReceiptCaptureImage}
            alt="go dutch app screenshot"
          />
          <div className="feature-section">
            <div className="section-container">
              <h2 className="features-title">Receipt Capture!</h2>
              <img
                className="logo"
                src={GoDutchLogo}
                alt="go dutch logo"
              />
            </div>

            <p className="feature-description-text">
              Our receipt-parsing feature revolutionizes bill-splitting by
              allowing users to capture images of receipts, automatically
              extracting text such as dinner item names and prices. This
              information is then transformed into swappable dinner items,
              streamlining the process of splitting bills by effortlessly
              converting receipt data into actionable, swipeable items for each
              diner!
            </p>
          </div>
        </div>
      </div>

      <div className="features-container">
        <div className="image-and-info-group">
          <img
            className="screens"
            src={AssignItems}
            alt="go dutch app screenshot"
          />
          <div className="feature-section">
            <div className="section-container">
              <h2 className="features-title">Swippable Dinner Items!</h2>{' '}
              <img
                className="logo"
                src={GoDutchLogo}
                alt="go dutch logo"
              />
            </div>

            <p className="feature-description-text">
              Our swippable dinner items feature streamlines the dining
              experience, enabling users to effortlessly swipe up the item tiles
              to assign them to the current diner displayed in the app. Simplify
              the process of splitting bills by intuitively allocating each item
              to the respective diner with a quick swipe gesture.
            </p>
          </div>
        </div>
        <div className="image-and-info-group">
          <img
            className="screens"
            src={AddDinersScreen}
            alt="go dutch app screenshot"
          />
          <div className="feature-section">
            <div className="section-container">
              <h2 className="features-title">Add Diners!</h2>
              <img
                className="logo"
                src={GoDutchLogo}
                alt="go dutch logo"
              />
            </div>

            <p className="feature-description-text">
              Our "Add Diners" feature taps into our extensive user database,
              enabling you to seamlessly include companions to your split bill
              directly from our network. Whether it's friends, family, or
              colleagues, effortlessly invite them to join the bill-splitting
              process, enhancing convenience and ensuring accuracy in tracking
              expenses.
            </p>
          </div>
        </div>
      </div>

      <div className="features-container">
        <div className="image-and-info-group">
          <img
            className="screens"
            src={SelectBirthdaysModal}
            alt="go dutch app screenshot"
          />
          <div className="feature-section">
            <div className="section-container">
              <h2 className="features-title">Birthday Diner Feature!</h2>{' '}
              <img
                className="logo"
                src={GoDutchLogo}
                alt="go dutch logo"
              />
            </div>

            <p className="feature-description-text">
              Our "Birthday Diner" feature simplifies the celebration by
              allowing you to flag any diner birthdays. At the end, choose to
              distribute their expenses among the group, and our system will
              automatically calculate and allocate their portion, ensuring a
              hassle-free and fair way to share the joy of the occasion.
            </p>
          </div>
        </div>
        <div className="image-and-info-group">
          <img
            className="screens"
            src={CloseOutDetails}
            alt="go dutch app screenshot"
          />
          <div className="feature-section">
            <div className="section-container">
              <h2 className="features-title">
                Payment Due Notifications & History!
              </h2>{' '}
              <img
                className="logo"
                src={GoDutchLogo}
                alt="go dutch logo"
              />
            </div>

            <p className="feature-description-text">
              Payment due notifications are immediately sent out once the check
              is closed, notifying all diners what portion they owe to the
              primary diner. "Check Closeout" and "Dining Event History" screens
              provide a comprehensive overview of the bill details, allowing
              users to review expenses. Additionally, all check closeout details
              are seamlessly stored in your dining event history for convenient
              future reference and review, ensuring transparency and
              accountability in your dining experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="features-container">
        <div className="image-and-info-group">
          <img
            className="screens"
            src={ViewUserProfileScreen}
            alt="go dutch app screenshot"
          />

          <div className="feature-section">
            <div className="section-container">
              <h2 className="features-title">Connect With Users!</h2>
              <img
                className="logo"
                src={GoDutchLogo}
                alt="go dutch logo"
              />
            </div>

            <p className="feature-description-text">
              Our user profiles facilitate social interaction by allowing users
              to explore and learn about each other through profile informaion.
              Discover shared interests, backgrounds, and experiences, fostering
              meaningful connections within the community while enhancing the
              overall user experience.
            </p>
          </div>
        </div>
        <div className="image-and-info-group">
          <img
            className="screens"
            src={FavoriteDinersScreen}
            alt="go dutch app screenshot"
          />

          <div className="feature-section">
            <div className="section-container">
              <h2 className="features-title">Favorite Diners!</h2>{' '}
              <img
                className="logo"
                src={GoDutchLogo}
                alt="go dutch logo"
              />
            </div>

            <p className="feature-description-text">
              Our "Favorite Diners" feature lets you preserve cherished dining
              memories by saving the profiles of your favorite companions with
              whom you've shared memorable meals, with an area for you to save
              notes on the diner or experience. Easily access and revisit these
              connections, keeping track of your preferred dining partners for
              future culinary adventures.
            </p>
          </div>
        </div>
        <div className="image-and-info-group">
          <img
            className="screens"
            src={FavoriteRestaurantsScreen}
            alt="go dutch app screenshot"
          />
          <div className="feature-section">
            <div className="section-container">
              <h2 className="features-title">Favorite Restaurants!</h2>{' '}
              <img
                className="logo"
                src={GoDutchLogo}
                alt="go dutch logo"
              />
            </div>

            <p className="feature-description-text">
              Our "Favorite Restaurants" feature enables you to curate a
              personalized list of beloved dining spots, ensuring quick and
              effortless access for making reservations. It also allows you to
              save notes on why this is a favorite! Maybe it was the delicious
              pasta?! With just a few taps, you can easily view and select from
              your favorite establishments, streamlining the reservation process
              and ensuring seamless dining experiences at your preferred venues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoDutch;

{
  /*         
        1.
        **Split with Ease:** Say goodbye to the headache of dividing the bill
        manually. SplitEase lets you effortlessly split the bill with your
        dining companions, ensuring everyone pays their fair share.
        
        2.
        **Seamless Transactions:** With just a few taps, you can split the bill
        and settle up instantly. No more awkward calculations or waiting for
        change – SplitEase makes the process smooth and seamless. 3.
        **Customizable Splits:** Whether it's an equal split, or you need to
        account for who ordered what, SplitEase gives you the flexibility to
        customize how you divide the bill, ensuring accuracy every time. 4.
        **Save Time:** Enjoy more time socializing and less time worrying about
        the bill. SplitEase streamlines the process, so you can focus on what
        really matters – good food and great company. Download SplitEase now and
        revolutionize the way you dine with friends. Say goodbye to
        bill-splitting headaches and hello to stress-free dining experiences!
        🎉🥂 #SplitEase #DineWithEase Tired of dealing with the discomfort of
        how to distribute the when the bill comes to the table? Let Go Dutch!
        handle it for you! And no one ever want to be responsible for divvying
        up the bill…until; now! A mobile app that allows you to take a
        photograph of your itemized receipt, and attribute to each diner what
        items they ordered for a seamless bill splitting process! */
}
