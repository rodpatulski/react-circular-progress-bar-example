import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import GradientSVG from '../components/GradientSVG';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Home: React.FC = () => {

	const percentage = 66;

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
					startColor="red"
					endColor="blue"
					idCSS={'mygradient'}
					rotation={90}
				/>
				<CircularProgressbar value={percentage} text={`${percentage}%`} />;
	  </IonContent>
		</IonPage>
	);
};

export default Home;
