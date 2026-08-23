/**
 * ŞEMA KAYIT DEFTERİ — ÇİZİM KATMANI
 * ==================================================================
 *
 * Ders içeriği bir görseli ADIYLA ister:
 *
 *     { type: 'figure', kind: 'mitokondri-yapi', data: { ... } }
 *
 * İçerik, görselin nasıl çizileceğini bilmez; yalnızca hangi bilimsel
 * şemayı istediğini söyler. Çizimi buradaki bileşen yapar:
 *
 *   · Aynı şema onlarca derste tekrar kullanılır (§44).
 *   · Bir şemanın çizimi düzeltilince o şemayı kullanan bütün dersler
 *     birden düzelir.
 *   · AI içerik üretirken "şu mor kartı yap" diyemez; yalnızca var olan
 *     şemalardan birini seçebilir (§14).
 *
 * Meta veri (ad, bölgeler, minimum genişlik) `registry.js` içindedir ve
 * React'siz okunabilir; burada yalnızca çizim bileşenleri bağlanır.
 *
 * TANINMAYAN `kind` HATA DEĞİLDİR
 * Kayıtlı olmayan bir şema istenirse ders çökmez; alt yazı ve amaç metni
 * korunarak yerine bir yer tutucu gösterilir (§50).
 */

import ActivationEnergy from './ActivationEnergy'
import ActionPotential from './ActionPotential'
import ActiveTransportPump from './ActiveTransportPump'
import AminoAcidPeptide from './AminoAcidPeptide'
import AtpLedger from './AtpLedger'
import BloodGroupInheritance from './BloodGroupInheritance'
import BulkTransport from './BulkTransport'
import CarbonTracing from './CarbonTracing'
import CellCycle from './CellCycle'
import CellTypeComparison from './CellTypeComparison'
import CellMaintenanceSystem from './CellMaintenanceSystem'
import CentralNervousSystem from './CentralNervousSystem'
import ChemicalSynapse from './ChemicalSynapse'
import ChromatinPackaging from './ChromatinPackaging'
import Chemiosmosis from './Chemiosmosis'
import CellOsmoticResponse from './CellOsmoticResponse'
import DiffusionRateGraph from './DiffusionRateGraph'
import DnaRnaComparison from './DnaRnaComparison'
import EcosystemAnatomy from './EcosystemAnatomy'
import EnergyFlowWeb from './EnergyFlowWeb'
import EndosymbiosisSequence from './EndosymbiosisSequence'
import { EndocrineCases, EndocrineHomeostasis, EndocrineMap, HormoneCommunication, HypothalamusPituitary } from './EndocrineIllustrations'
import { AccessoryOrgansPlate, DigestiveTractPlate, IntestinalAbsorptionPlate, NutrientDigestionPlate, StomachMechanismPlate } from './DigestiveIllustrations'
import { BloodLymphPlate, CardiacCyclePlate, HeartCirculationPlate, ImmuneResponsePlate, VascularMicrocirculationPlate } from './CirculationImmuneIllustrations'
import { ChemicalSkinPlate, EarBalancePlate, EyeOpticsPlate, RetinaVisionPlate, SensoryCodingPlate } from './SensoryIllustrations'
import { BoneTissuePlate, CartilageJointPlate, MovementIntegration, MuscleContractionPlate, SkeletalMuscleStructure } from './SupportMovementIllustrations'
import EnzymeRateGraphs from './EnzymeRateGraphs'
import HomeostasisLoop from './HomeostasisLoop'
import InheritanceConceptMap from './InheritanceConceptMap'
import KingdomDecisionTree from './KingdomDecisionTree'
import MagneticForce from './MagneticForce'
import PhysicsDiscoveryLab from './PhysicsDiscoveryLab'
import MatterCycles from './MatterCycles'
import AtpStructure from './AtpStructure'
import MembraneModel from './MembraneModel'
import MendelCross from './MendelCross'
import MetabolismAtp from './MetabolismAtp'
import MitochondrionAnatomy from './MitochondrionAnatomy'
import MitosisPhases from './MitosisPhases'
import NutritionStrategies from './NutritionStrategies'
import NucleotideStructure from './NucleotideStructure'
import NucleusStructure from './NucleusStructure'
import NeuronGlia from './NeuronGlia'
import OrganelleMembraneGroups from './OrganelleMembraneGroups'
import OrganizationLevels from './OrganizationLevels'
import OsmosisMechanism from './OsmosisMechanism'
import PhScale from './PhScale'
import PassiveTransport from './PassiveTransport'
import PeripheralReflex from './PeripheralReflex'
import PedigreeSexLinked from './PedigreeSexLinked'
import PopulationBalance from './PopulationBalance'
import PermeabilityRoutes from './PermeabilityRoutes'
import PhospholipidBilayer from './PhospholipidBilayer'
import ProteinStructure from './ProteinStructure'
import RespirationMap from './RespirationMap'
import { AlveolarGasExchangePlate, GasTransportPlate, RespiratoryControlPlate, RespiratoryTractPlate, VentilationMechanismPlate } from './RespiratoryIllustrations'
import SecretionPathway from './SecretionPathway'
import TaxonomyLevels from './TaxonomyLevels'
import SynthesisHydrolysis from './SynthesisHydrolysis'
import UnitCircle from './UnitCircle'
import { GlomerularFiltrationPlate, KidneyHomeostasisPlate, NephronProcessingPlate, NephronStructurePlate, UrinaryAnatomyPlate } from './UrinaryIllustrations'
import { EmbryonicDevelopmentPlate, FertilizationImplantationPlate, GametogenesisPlate, MenstrualCyclePlate, ReproductiveAnatomyPlate } from './ReproductiveIllustrations'
import { BiotechnologyPlate, DnaReplicationPlate, GeneticMaterialEvidencePlate, RnaTranscriptionPlate, TranslationPlate } from './GeneProteinIllustrations'
import { CommunityStructurePlate, CompetitionNichePlate, PopulationDynamicsPlate, SpeciesInteractionsPlate, SuccessionDisturbancePlate } from './CommunityPopulationIllustrations'
import { CalvinCyclePlate, ChemosynthesisPlate, ChloroplastPigmentPlate, LightReactionsPlate, PhotosynthesisRatePlate } from './PhotosynthesisIllustrations'
import { FlowerReproductionPlate, PlantHormonePlate, PlantOrganPlate, PlantTissuePlate, PlantTransportPlate } from './PlantBiologyIllustrations'
import { AdaptationPlate, HumanSelectionPlate, MutationPlate, NaturalSelectionPlate, VariationPlate } from './LivingEnvironmentIllustrations'
import WaterPolarity from './WaterPolarity'
import VirusLifeCriteria from './VirusLifeCriteria'
import VitaminSolubility from './VitaminSolubility'
import { ChemicalSafetyPictograms, ChemistryLanguageLevels, LaboratoryTools } from './ChemistryIllustrations'
import { FIGURE_META, canonicalFigureKind } from './registry'

/** Şema adı → çizim bileşeni. `registry.js` ile aynı anahtarları kullanır. */
const COMPONENTS = {
  'organizasyon-duzeyleri': OrganizationLevels,
  'metabolizma-atp': MetabolismAtp,
  'homeostazi-dongusu': HomeostasisLoop,
  'su-polarlik': WaterPolarity,
  'ph-skalasi': PhScale,
  'sentez-hidroliz': SynthesisHydrolysis,
  'fosfolipit-cift-tabaka': PhospholipidBilayer,
  'amino-asit-peptit': AminoAcidPeptide,
  'protein-yapi-duzeyleri': ProteinStructure,
  'aktivasyon-enerjisi': ActivationEnergy,
  'enzim-hiz-grafikleri': EnzymeRateGraphs,
  'nukleotit-yapi': NucleotideStructure,
  'vitamin-cozunurluk': VitaminSolubility,
  'dna-rna-karsilastirma': DnaRnaComparison,
  'atp-yapisi': AtpStructure,
  'hucre-zari-model': MembraneModel,
  'pasif-tasima': PassiveTransport,
  'zar-gecirgenlik-yollari': PermeabilityRoutes,
  'difuzyon-hiz-grafigi': DiffusionRateGraph,
  'osmoz-mekanizma': OsmosisMechanism,
  'hucre-osmoz-tepkileri': CellOsmoticResponse,
  'aktif-tasima-pompa': ActiveTransportPump,
  'toplu-tasima': BulkTransport,
  'organel-zar-gruplari': OrganelleMembraneGroups,
  'salgi-yolu': SecretionPathway,
  'hucre-bakim-sistemi': CellMaintenanceSystem,
  'cekirdek-yapisi': NucleusStructure,
  'kromatin-paketlenme': ChromatinPackaging,
  'hucre-tipleri': CellTypeComparison,
  'kalitim-kavram-haritasi': InheritanceConceptMap,
  'mendel-caprazlama': MendelCross,
  'kan-grubu-kalitimi': BloodGroupInheritance,
  'soyagaci-x-bagli': PedigreeSexLinked,
  'ekosistem-anatomisi': EcosystemAnatomy,
  'ekosistem-enerji-akisi': EnergyFlowWeb,
  'ekosistem-madde-donguleri': MatterCycles,
  'ekosistem-populasyon-dengesi': PopulationBalance,
  'sinir-noron-glia': NeuronGlia,
  'sinir-aksiyon-potansiyeli': ActionPotential,
  'sinir-kimyasal-sinaps': ChemicalSynapse,
  'sinir-merkezi-sistem': CentralNervousSystem,
  'sinir-cevresel-refleks': PeripheralReflex,
  'endokrin-harita': EndocrineMap,
  'hormon-iletisimi': HormoneCommunication,
  'hipotalamus-hipofiz': HypothalamusPituitary,
  'endokrin-homeostazi': EndocrineHomeostasis,
  'endokrin-vakalar': EndocrineCases,
  'duyu-kodlama': SensoryCodingPlate,
  'goz-optigi': EyeOpticsPlate,
  'retina-gorme': RetinaVisionPlate,
  'kulak-isitme-denge': EarBalancePlate,
  'kimyasal-deri-duyulari': ChemicalSkinPlate,
  'hareket-butunlugu': MovementIntegration,
  'kemik-doku': BoneTissuePlate,
  'kikirdak-eklem': CartilageJointPlate,
  'iskelet-kasi-yapi': SkeletalMuscleStructure,
  'kas-kasilma': MuscleContractionPlate,
  'sindirim-kanali': DigestiveTractPlate,
  'mide-mekanizmasi': StomachMechanismPlate,
  'yardimci-organlar': AccessoryOrgansPlate,
  'besin-sindirim-haritasi': NutrientDigestionPlate,
  'bagirsak-emilim': IntestinalAbsorptionPlate,
  'kalp-dolasim-haritasi': HeartCirculationPlate,
  'kalp-dongusu': CardiacCyclePlate,
  'damar-mikrodolasim': VascularMicrocirculationPlate,
  'kan-lenf-sistemi': BloodLymphPlate,
  'bagisiklik-yaniti': ImmuneResponsePlate,
  'solunum-yolu-anatomisi': RespiratoryTractPlate,
  'ventilasyon-mekanizmasi': VentilationMechanismPlate,
  'alveol-gaz-degisimi': AlveolarGasExchangePlate,
  'gaz-tasima': GasTransportPlate,
  'solunum-kontrolu': RespiratoryControlPlate,
  'uriner-sistem-anatomisi': UrinaryAnatomyPlate,
  'nefron-yapi-haritasi': NephronStructurePlate,
  'glomeruler-suzulme': GlomerularFiltrationPlate,
  'nefron-tup-isleme': NephronProcessingPlate,
  'bobrek-homeostazi': KidneyHomeostasisPlate,
  'ureme-anatomi-haritasi': ReproductiveAnatomyPlate,
  'gametogenez-karsilastirma': GametogenesisPlate,
  'menstrual-dongu-hormonlari': MenstrualCyclePlate,
  'dollenme-implantasyon': FertilizationImplantationPlate,
  'embriyonik-gelisim-plasenta': EmbryonicDevelopmentPlate,
  'kalitsal-madde-kaniti': GeneticMaterialEvidencePlate,
  'dna-replikasyon-mekanizmasi': DnaReplicationPlate,
  'rna-transkripsiyon': RnaTranscriptionPlate,
  'genetik-kod-translasyon': TranslationPlate,
  'biyoteknoloji-araclari': BiotechnologyPlate,
  'ayt-komunite-yapisi': CommunityStructurePlate,
  'ayt-rekabet-nis': CompetitionNichePlate,
  'ayt-turler-arasi-iliskiler': SpeciesInteractionsPlate,
  'ayt-suksesyon-bozunum': SuccessionDisturbancePlate,
  'ayt-populasyon-dinamikleri': PopulationDynamicsPlate,
  'ayt-kloroplast-pigment': ChloroplastPigmentPlate,
  'ayt-isik-reaksiyonlari': LightReactionsPlate,
  'ayt-calvin-dongusu': CalvinCyclePlate,
  'ayt-fotosentez-hiz': PhotosynthesisRatePlate,
  'ayt-kemosentez': ChemosynthesisPlate,
  'ayt-bitki-dokulari': PlantTissuePlate,
  'ayt-bitki-organlari': PlantOrganPlate,
  'ayt-bitki-tasima': PlantTransportPlate,
  'ayt-bitki-hormonlari': PlantHormonePlate,
  'ayt-bitki-ureme': FlowerReproductionPlate,
  'ayt-varyasyon': VariationPlate,
  'ayt-mutasyon': MutationPlate,
  'ayt-dogal-secilim': NaturalSelectionPlate,
  'ayt-adaptasyon': AdaptationPlate,
  'ayt-yapay-secilim-direnc': HumanSelectionPlate,
  'siniflandirma-birimleri': TaxonomyLevels,
  'alem-karar-agaci': KingdomDecisionTree,
  'hucre-dongusu': CellCycle,
  'mitoz-evreleri': MitosisPhases,
  'beslenme-stratejileri': NutritionStrategies,
  'virus-canlilik': VirusLifeCriteria,
  'mitokondri-yapi': MitochondrionAnatomy,
  'solunum-haritasi': RespirationMap,
  kemiozmoz: Chemiosmosis,
  endosimbiyoz: EndosymbiosisSequence,
  'karbon-izleme': CarbonTracing,
  'atp-bilancosu': AtpLedger,
  'kimya-gosterim-duzeyleri': ChemistryLanguageLevels,
  'kimya-guvenlik-piktogramlari': ChemicalSafetyPictograms,
  'kimya-laboratuvar-araclari': LaboratoryTools,
  'birim-cember': UnitCircle,
  'manyetik-kuvvet': MagneticForce,
  'fizik-kesif-laboratuvari': PhysicsDiscoveryLab,
}

export const FIGURES = Object.fromEntries(
  Object.entries(FIGURE_META)
    .filter(([kind]) => COMPONENTS[kind])
    .map(([kind, meta]) => [kind, { ...meta, Component: COMPONENTS[kind] }])
)

export function resolveFigure(kind) {
  return FIGURES[canonicalFigureKind(kind)] ?? null
}

export { figureOptions } from './registry'
