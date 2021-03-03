import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import GradientSVG from '../components/GradientSVG';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Home: React.FC = () => {

	const percentage = 100;

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Blank</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<IonTitle size="large">Blank</IonTitle>
					</IonToolbar>
				</IonHeader>
				{/* define a gradient pattern that css will change in the <CircularProgressbar> */}
				<GradientSVG
					startColor="#53599A"
					endColor="#AEECEF"
					idCSS={'mygradient'}
					rotation={0}
				/>
				<div className="container">
					<CircularProgressbarWithChildren value={percentage}
						counterClockwise={true} styles={buildStyles({
							// Text size
							textSize: '12px',

							// How long animation takes to go from one percentage to another, in seconds
							pathTransitionDuration: 0.5,

							// Can specify path transition in more detail, or remove it entirely
							// pathTransition: 'none',

							// Colors
							textColor: '#f88',
							trailColor: 'lightgrey',
							backgroundColor: '#3e98c7',
						})}>
						<div style={{ fontSize: 12, marginTop: -5 }}>
							<strong>${percentage}</strong>
							<div className = "fullAmount">out of $500</div>
  						</div>
					</CircularProgressbarWithChildren>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Home;
