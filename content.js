'use strict';
const LAB = {
 parts: [
 ['Eyepiece','The ocular lens through which you view the image. In this simulation it is 10×.'],
 ['Objective lenses','Lenses near the specimen; select 4×, 10× or 40×. Total optical magnification is eyepiece × objective.'],
 ['Stage','Supports the slide; stage controls move the specimen in the horizontal plane.'],
 ['Condenser','Concentrates illumination onto the specimen.'],
 ['Iris diaphragm','Adjusts the illumination cone and affects contrast and resolution; it is not simply a brightness control.'],
 ['Coarse focus','Moves the stage or objective substantially. Start at low power; use fine focus at high power.'],
 ['Fine focus','Makes small focus adjustments to sharpen the image.'],
 ['Illuminator','Provides light for transmitted-light observation.']
 ],
 specimens: [
 {id:'hair',name:'Hair shaft',type:'Hair',file:'hair.svg',features:'Outer cuticle, a pigmented cortex and an interrupted central medulla are depicted.',limit:'Medulla appearance varies between hairs and along one hair. These features alone cannot establish human/animal origin, body area or an individual source.'},
 {id:'cotton',name:'Ribbon-like fibre',type:'Cotton-like fibre',file:'cotton.svg',features:'A flattened, ribbon-like outline with repeated twists (convolutions) is depicted.',limit:'This is consistent with cotton morphology in a teaching example. Confirm fibre identity with appropriate microscopy and complementary tests; do not infer the garment of origin.'},
 {id:'synthetic',name:'Smooth manufactured fibre',type:'Manufactured fibre',file:'synthetic.svg',features:'A smooth, comparatively uniform filament with longitudinal striations is depicted.',limit:'Morphology does not establish a specific polymer. Polarised-light microscopy and infrared spectroscopy can help characterise fibre composition.'},
 {id:'glass',name:'Angular transparent fragment',type:'Glass-like fragment',file:'glass.svg',features:'An angular, transparent fragment with curved fracture lines is depicted.',limit:'Appearance alone cannot confirm glass or a source window. Refractive index and elemental analysis may be used in a properly controlled comparison.'},
 {id:'paint',name:'Layered coating fragment',type:'Paint-like fragment',file:'paint.svg',features:'Several coloured layers in a cross-section are depicted.',limit:'Layer sequence supports comparison but does not uniquely identify an object. Chemical characterisation and representative reference samples are needed.'}
 ],
 questions: [
 ['A 10× eyepiece and a 40× objective give what total optical magnification?',['40×','50×','400×','4,000×'],2,'Total optical magnification is eyepiece magnification multiplied by objective magnification: 10 × 40 = 400×.'],
 ['What does resolution describe?',['How large an image appears','The ability to distinguish closely spaced details','The brightness of the lamp','The size of the eyepiece'],1,'Resolution is the ability to distinguish closely spaced details as separate. Enlarging an image does not necessarily resolve more detail.'],
 ['What happens when you digitally enlarge a recorded image?',['New optical detail is captured','Numerical aperture increases','Existing pixels are enlarged','The specimen gets larger'],2,'Digital zoom enlarges existing image information. It does not improve the optical resolution of the original image.'],
 ['Which part concentrates light onto the specimen?',['Stage','Condenser','Eyepiece','Fine-focus knob'],1,'The condenser concentrates and directs illumination onto the specimen. Correct alignment and aperture settings matter for image quality.'],
 ['At a high-power objective, which focus adjustment is normally appropriate?',['Large coarse-focus movements','Fine focus','Slide removal','Changing the eyepiece'],1,'Fine focus makes small adjustments. Large coarse-focus movements at high power can risk contact between the objective and slide.'],
 ['For a fixed wavelength, a higher numerical aperture generally permits…',['Better resolution','Automatic source identification','Less resolved detail','Unlimited resolution'],0,'Higher numerical aperture can resolve closer details under suitable conditions. Resolution remains limited by diffraction and specimen/image conditions.'],
 ['Which structure forms the outer surface of a hair shaft?',['Medulla','Cortex','Cuticle','Condenser'],2,'The cuticle is the outer layer. The cortex lies beneath it; a medulla may be present centrally, but is not present in every hair.'],
 ['An absent medulla in a hair means…',['It must be synthetic','It must belong to one specific person','It cannot be examined','It is one observation to record'],3,'A medulla can be absent, continuous or interrupted. Record its appearance alongside other features; absence alone is not a source or species determination.'],
 ['Ribbon-like twists in a fibre suggest which teaching classification?',['Cotton-like morphology','A unique textile factory','Glass','A particular synthetic polymer'],0,'Cotton often has a flattened, twisted ribbon-like appearance. Morphology is suggestive; identification requires appropriate confirmatory examination.'],
 ['A smooth fibre image alone establishes…',['Polyester composition','Nylon composition','A specific garment','None of these'],3,'Different manufactured fibres can have similar morphology. Additional optical and chemical examinations are needed to characterise a polymer or compare a source.'],
 ['Two glass fragments look colourless and angular. What is justified?',['They came from the same window','They are visually similar in those features','They prove contact with a suspect','Their refractive indices are equal'],1,'Colour and shape are observations. Neither shared origin nor equal refractive index follows from visual similarity. Controlled measurements may help further comparison.'],
 ['Why examine several representative known hairs?',['To guarantee identification','To eliminate the need for questioned samples','To assess variation within the known sample','To calculate guilt'],2,'Hairs from one source can vary. Representative known samples help assess that range; limited sampling restricts the interpretation.'],
 ['In the Wooden Ladder case, the F-Q1 and F-K1 fibre schematics look similar. The best statement is…',['They uniquely identify a person','They prove direct transfer','They share the observed features; origin is not established','They have identical chemistry'],2,'Visual similarity describes shared observed features. It does not establish unique origin, chemical equivalence, transfer mechanism or who committed an offence.'],
 ['Maintenance took place before the gallery incident. Why consider contamination and secondary transfer?',['They can offer alternative explanations for trace evidence','They always explain every finding','They prove innocence','They make documentation unnecessary'],0,'Trace material may transfer indirectly or be introduced through contamination. Context, controls and handling history are needed to evaluate these possibilities.'],
 ['Which report wording is most defensible for this simulated case?',['The suspect is identified by the fibre','The images prove a common source','The illustrated features are similar; further testing and context are needed','A 99% source probability is established'],2,'These uncalibrated teaching illustrations support only a description of depicted features. They cannot establish a common source, numerical probability or guilt.']
 ],
 sources:[
 ['Nikon MicroscopyU: useful magnification','https://www.microscopyu.com/microscopy-basics/useful-magnification-range'],
 ['Nikon MicroscopyU: objective properties','https://www.microscopyu.com/microscopy-basics/properties-of-microscope-objectives'],
 ['FBI: limitations of microscopic hair comparisons','https://www.fbi.gov/news/press-releases/root-cause-analysis-of-microscopic-hair-comparison-analysis-completed'],
 ['FBI laboratory: trace evidence procedures','https://fbilabqsd.fbi.gov/file-repository/trace-evidence']
 ]
};
