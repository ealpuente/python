/*******************************************************************************
 * Copyright (c) 2013, 2016 Prepartic and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();
var preguntaids = new Array();
var blocks = new Array();
//  Id pregunta: 2751 Año de creación de pregunta: 2011
 questions[0]= "1)  Seg&uacute;n el RD 1671/2009 cu&aacute;l de los siguientes elementos no es un contenido obligatorio del recibo electr&oacute;nico que deber&aacute;n emitir los registros electr&oacute;nicos:<br/>";
 choices[0]= new Array();
 choices[0][0] = "N&uacute;mero de entrada de registro";
 choices[0][1] = "Informaci&oacute;n del plazo m&aacute;ximo establecido para la resoluci&oacute;n y notificaci&oacute;n del procedimiento";
 choices[0][2] = "Copia del escrito, comunicaci&oacute;n o solicitud presentada";
 choices[0][3] = "Todos las respuestas anteriores forman parte del contenido que debe tener el recibo de un registro electr&oacute;nico";
 answers[0] = 3;
 units[0] = ['45'];
 blocks[0] = ['B1'];
 comments[0] = "Id Pregunta: 2751. ";
 preguntaids[0] = 2751


//  Id pregunta: 2718 Año de creación de pregunta: 2010
 questions[1]= "2)  En el Esquema Nacional de Interoperabilidad, se establece que los sistemas o aplicaciones implicados en la provisi&oacute;n de un servicio p&uacute;blico por v&iacute;a electr&oacute;nica se sincronizar&aacute;n con la hora oficial de:<br/>";
 choices[1]= new Array();
 choices[1][0] = "El reloj de la Puerta del Sol";
 choices[1][1] = "El Instituto Europeo de Medici&oacute;n Horaria";
 choices[1][2] = "La Agencia Espa&ntilde;ola de Meteorolog&iacute;a";
 choices[1][3] = "El Real Instituto y Observatorio de la Armada";
 answers[1] = 3;
 units[1] = ['45'];
 blocks[1] = ['B1'];
 comments[1] = "Id Pregunta: 2718. Art&iacute;culo 15 ENI";
 preguntaids[1] = 2718


//  Id pregunta: 2704 Año de creación de pregunta: 2011
 questions[2]= "3)  El directorio de Sedes Electr&oacute;nicas de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos es gestionado por:<br/>";
 choices[2]= new Array();
 choices[2][0] = "La Presidencia del Gobierno";
 choices[2][1] = "El Ministerio de la Presidencia";
 choices[2][2] = "La Red SARA";
 choices[2][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[2] = 1;
 units[2] = ['45'];
 blocks[2] = ['B1'];
 comments[2] = "Id Pregunta: 2704. Examen GSI A2 AGE 2010";
 preguntaids[2] = 2704


//  Id pregunta: 2681 Año de creación de pregunta: 2011
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Interoperabilidad, Real Decreto 4/2010 del 8 de enero?<br/>";
 choices[3]= new Array();
 choices[3][0] = "La interoperabilidad como cualidad integral";
 choices[3][1] = "La reutilizaci&oacute;n y la transferencia tecnol&oacute;gica";
 choices[3][2] = "El car&aacute;cter multidimensional de la interoperabilidad";
 choices[3][3] = "El enfoque de soluciones multilaterales";
 answers[3] = 1;
 units[3] = ['45'];
 blocks[3] = ['B1'];
 comments[3] = "Id Pregunta: 2681. ";
 preguntaids[3] = 2681


//  Id pregunta: 2757 Año de creación de pregunta: 2016
 questions[4]= "5)  Seg&uacute;n la Resoluci&oacute;n de 27 de octubre de 2016, de la Secretar&iacute;a de Estado de Administraciones P&uacute;blicas, por la que se aprueba la NTI de Pol&iacute;tica de Firma y Sello Electr&oacute;nicos y de Certificados de la Administraci&oacute;n&hellip;<br/>";
 choices[4]= new Array();
 choices[4][0] = "Las Administraciones P&uacute;blicas se acoger&aacute;n preferentemente a la Pol&iacute;tica Marco de Firma Electr&oacute;nica basada en Certificados";
 choices[4][1] = "Cada organizaci&oacute;n deber&aacute; desarrollar una pol&iacute;tica propia a partir de la Pol&iacute;tica Marco de Firma Electr&oacute;nica basada en Certificados";
 choices[4][2] = "El objetivo de la Pol&iacute;tica de Firma ser&aacute; normalizar aspectos t&eacute;cnicos de las firmas electr&oacute;nicas";
 choices[4][3] = "Las pol&iacute;ticas de firma y sello particulares estar&aacute;n orientadas a una organizaci&oacute;n concreta";
 answers[4] = 0;
 units[4] = ['45'];
 blocks[4] = ['B1'];
 comments[4] = "Id Pregunta: 2757. NTI";
 preguntaids[4] = 2757


//  Id pregunta: 2733 Año de creación de pregunta: 2002
 questions[5]= "6)  La posibilidad de que aplicaciones de distintos desarrolladores de software funcionen en m&aacute;quinas de diversos fabricantes, se conoce como:<br/>";
 choices[5]= new Array();
 choices[5][0] = "Interoperabilidad";
 choices[5][1] = "Escalabilidad";
 choices[5][2] = "Portabilidad";
 choices[5][3] = "Integrabilidad";
 answers[5] = 2;
 units[5] = ['45'];
 blocks[5] = ['B1'];
 comments[5] = "Id Pregunta: 2733. ";
 preguntaids[5] = 2733


//  Id pregunta: 2696 Año de creación de pregunta: 2010
 questions[6]= "7)  De acuerdo a lo establecido en el Esquema Nacional de Interoperabilidad, las administraciones utilizar&aacute;n para las aplicaciones que declaren como de fuentes abiertas aquellas licencias que aseguren que los programas, datos o informaci&oacute;n que se comparten:<br/>";
 choices[6]= new Array();
 choices[6][0] = "Se ejecuten exclusivamente para el prop&oacute;sito definido.";
 choices[6][1] = "S&oacute;lo permitan conocer su c&oacute;digo fuente a las personas autorizadas.";
 choices[6][2] = "No pueden modificarse sin permiso previo del autor.";
 choices[6][3] = "Todas las anteriores son falsas.";
 answers[6] = 3;
 units[6] = ['45'];
 blocks[6] = ['B1'];
 comments[6] = "Id Pregunta: 2696. Art&iacute;culo 16 ENI";
 preguntaids[6] = 2696


//  Id pregunta: 2775 Año de creación de pregunta: 2020
 questions[7]= "8)  &iquest;En qu&eacute; art&iacute;culo del ENI se recomienda el uso de la Licencia P&uacute;blica de la Uni&oacute;n Europea para el licenciamiento de las Administraciones P&uacute;blicas?<br/>";
 choices[7]= new Array();
 choices[7][0] = "15";
 choices[7][1] = "16";
 choices[7][2] = "17";
 choices[7][3] = "18";
 answers[7] = 1;
 units[7] = ['45'];
 blocks[7] = ['B1'];
 comments[7] = "Id Pregunta: 2775. ";
 preguntaids[7] = 2775


//  Id pregunta: 2676 Año de creación de pregunta: 2015
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes no es un contenido m&iacute;nimo que deben tener las sedes electr&oacute;nicas de acuerdo con el art&iacute;culo 6 del RD 1671/2009?<br/>";
 choices[8]= new Array();
 choices[8][0] = "Sistema de verificaci&oacute;n de los certificados de la sede, accesible de forma directa y gratuita";
 choices[8][1] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal, incluyendo un enlace con la sede electr&oacute;nica de la AEPD";
 choices[8][2] = "Servicios de asesoramiento electr&oacute;nico al usuario para la correcta utilizaci&oacute;n de la sede";
 choices[8][3] = "Todos los anteriores son contenidos m&iacute;nimos de las sedes electr&oacute;nicas";
 answers[8] = 3;
 units[8] = ['45'];
 blocks[8] = ['B1'];
 comments[8] = "Id Pregunta: 2676. La ley 39/2015 a&uacute;n no ha tenido desarrollo reglamentario";
 preguntaids[8] = 2676


//  Id pregunta: 2694 Año de creación de pregunta: 2006
 questions[9]= "10)  Cu&aacute;l de los siguientes grupos no forma parte de la estructura del Sistema Europeo de Normalizaci&oacute;n:<br/>";
 choices[9]= new Array();
 choices[9][0] = "AENOR.";
 choices[9][1] = "El Comit&eacute; europeo de Normalizaci&oacute;n.";
 choices[9][2] = "Los &Oacute;rganos internacionales de Normalizaci&oacute;n.";
 choices[9][3] = "Los &Oacute;rganos europeos de Normalizaci&oacute;n.";
 answers[9] = 2;
 units[9] = ['45'];
 blocks[9] = ['B1'];
 comments[9] = "Id Pregunta: 2694. ";
 preguntaids[9] = 2694


//  Id pregunta: 2759 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas NO se considera un principio espec&iacute;fico de la interoperabilidad, seg&uacute;n indica el Real Decreto 4/2010 en su art&iacute;culo 4:<br/>";
 choices[10]= new Array();
 choices[10][0] = "La interoperabilidad como cualidad integral.";
 choices[10][1] = "Reevaluaci&oacute;n peri&oacute;dica de la interoperabilidad.";
 choices[10][2] = "Car&aacute;cter multidimensional de la interoperabilidad.";
 choices[10][3] = "Enfoque de soluciones multilaterales.";
 answers[10] = 1;
 units[10] = ['45'];
 blocks[10] = ['B1'];
 comments[10] = "Id Pregunta: 2759. Examen GSI A2 AGE 2014 Promoci&oacute;n Interna";
 preguntaids[10] = 2759


//  Id pregunta: 2724 Año de creación de pregunta: 2014
 questions[11]= "12)  En relaci&oacute;n con los sistemas abiertos, se&ntilde;ale la respuesta err&oacute;nea:<br/>";
 choices[11]= new Array();
 choices[11][0] = "Un sistema abierto es aquel cuyas especificaciones est&aacute;n aprobadas, publicadas y respaldadas por organismos independientes de normalizaci&oacute;n";
 choices[11][1] = "Un sistema abierto es aquel capaz de interconectarse con otros de acuerdo con unas normas establecidas";
 choices[11][2] = "Los sistemas abiertos se caracterizan por su interopeabilidad, portabilidad y escalabilidad";
 choices[11][3] = "Los sistemas abiertos deben hacer uso de est&aacute;ndares abiertos";
 answers[11] = 3;
 units[11] = ['45'];
 blocks[11] = ['B1'];
 comments[11] = "Id Pregunta: 2724. Un sistema puede ser abierto pero no hacer uso de est&aacute;ndares abiertos.";
 preguntaids[11] = 2724


//  Id pregunta: 2770 Año de creación de pregunta: 2016
 questions[12]= "13)  Sobre la gu&iacute;a de Comunicaci&oacute;n Digital de la AGE, se&ntilde;ale la respuesta falsa:<br/>";
 choices[12]= new Array();
 choices[12][0] = "La Gu&iacute;a de Comunicaci&oacute;n Digital para la AGE ofrece un marco de criterios, recomendaciones y buenas pr&aacute;cticas a considerar al crear, generar contenidos o evolucionar sitios web, sedes electr&oacute;nicas o tambi&eacute;n blogs, cuentas o perfiles de redes sociales.";
 choices[12][1] = "Recoge aspectos como la imagen Institucional: uso de los logotipos del Gobierno de Espa&ntilde;a, elementos distintivos de imagen en las redes sociales o la imagen promocional de la administraci&oacute;n electr&oacute;nica.";
 choices[12][2] = "Se divide en tres partes, con fasc&iacute;culos que pueden ser utilizados independientemente seg&uacute;n las necesidades de cada responsable del sitio web.";
 choices[12][3] = "La &laquo;Gu&iacute;a de Comunicaci&oacute;n Digital para la Administraci&oacute;n General del Estado&raquo; que se aprueba mediante la presente Resoluci&oacute;n se aplicar&aacute; al a&ntilde;o siguiente al de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[12] = 3;
 units[12] = ['45'];
 blocks[12] = ['B1'];
 comments[12] = "Id Pregunta: 2770. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[12] = 2770


//  Id pregunta: 2720 Año de creación de pregunta: 2014
 questions[13]= "14)  En relaci&oacute;n con el programa ISA (soluciones de interoperabilidad para las administraciones p&uacute;blicas europeas), se&ntilde;ale la respuesta err&oacute;nea:<br/>";
 choices[13]= new Array();
 choices[13][0] = "Abarca el per&iacute;odo 2010-2020";
 choices[13][1] = "Actuaciones destacadas dentro del marco del programa ISA son la red transeuropea sTESTA o el apoyo al proyecto STORK";
 choices[13][2] = "Tiene como &aacute;mbito las administraciones p&uacute;blicas europeas, incluidas las administraciones regionales y locales y las instituciones y &oacute;rganos comunitarios";
 choices[13][3] = "Su base legal se recoge en la Decisi&oacute;n 922/2009/CE";
 answers[13] = 0;
 units[13] = ['45'];
 blocks[13] = ['B1'];
 comments[13] = "Id Pregunta: 2720. El programa ISA abarca el per&iacute;odo 2010-2015";
 preguntaids[13] = 2720


//  Id pregunta: 2702 Año de creación de pregunta: 2016
 questions[14]= "15)  El art. 9 del Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n electr&oacute;nica, se refiere al inventario de informaci&oacute;n administrativa, y establece que las administraciones p&uacute;blicas deber&aacute;n mantener en &eacute;l:<br/>";
 choices[14]= new Array();
 choices[14][0] = "Los procedimientos administrativos y servicios que prestan de forma clasificada y estructurados en familias, con indicaci&oacute;n del nivel de informatizaci&oacute;n de los mismos.";
 choices[14][1] = "La relaci&oacute;n actualizada de los &oacute;rganos de direcci&oacute;n de los organismos y entidades de la administraci&oacute;n p&uacute;blica.";
 choices[14][2] = "La relaci&oacute;n de los documentos o datos que puede facilitar a otras administraciones a trav&eacute;s de un nodo de interoperabilidad, indicando las condiciones de acceso y uso del mismo.";
 choices[14][3] = "La relaci&oacute;n de sedes electr&oacute;nicas que complementan la red de oficinas de registro y atenci&oacute;n al ciudadano.";
 answers[14] = 0;
 units[14] = ['45'];
 blocks[14] = ['B1'];
 comments[14] = "Id Pregunta: 2702. Examen SSTI A1 Xunta de Galicia 2011";
 preguntaids[14] = 2702


//  Id pregunta: 2772 Año de creación de pregunta: 2020
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes niveles de interoperabilidad seg&uacute;n el Marco Europeo de Interoperabilidad se refiere a que las organizaciones puedan procesar de manera inteligible la informaci&oacute;n procedente de fuentes exteriores?<br/>";
 choices[15]= new Array();
 choices[15][0] = "Sem&aacute;ntica.";
 choices[15][1] = "Organizativa.";
 choices[15][2] = "Jur&iacute;dica.";
 choices[15][3] = "T&eacute;cnica.";
 answers[15] = 0;
 units[15] = ['45'];
 blocks[15] = ['B1'];
 comments[15] = "Id Pregunta: 2772. Examen TIC A1 AGE 2018";
 preguntaids[15] = 2772


//  Id pregunta: 2752 Año de creación de pregunta: 2011
 questions[16]= "17)  Seg&uacute;n el Real Decreto 1671/2009, las sedes electr&oacute;nicas de la Administraci&oacute;n General del Estado se crean:<br/>";
 choices[16]= new Array();
 choices[16][0] = "Por Orden Ministerial o Resoluci&oacute;n del titular del organismo.";
 choices[16][1] = "Por Real Decreto del Presidente del Gobierno.";
 choices[16][2] = "Por Orden Conjunta del Ministerio de la Presidencia y del Ministerio del que se trate.";
 choices[16][3] = "Por Acuerdo del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 answers[16] = 0;
 units[16] = ['45'];
 blocks[16] = ['B1'];
 comments[16] = "Id Pregunta: 2752. Examen GSI A2 AGE 2010";
 preguntaids[16] = 2752


//  Id pregunta: 2700 Año de creación de pregunta: 2015
 questions[17]= "18)  De las siguientes opciones, se&ntilde;ale cu&aacute;l es la que incluye extensiones que son todas admitidas de acuerdo con lo establecido en la Norma T&eacute;cnica de Interoperabilidad de Cat&aacute;logo de est&aacute;ndares:<br/>";
 choices[17]= new Array();
 choices[17][0] = "xls, xlsx, doc, docx";
 choices[17][1] = "rar, zip, gz";
 choices[17][2] = "jpg, gif, png, tiff";
 choices[17][3] = "mp3, ogg, mp4";
 answers[17] = 3;
 units[17] = ['45'];
 blocks[17] = ['B1'];
 comments[17] = "Id Pregunta: 2700. Examen TIC A1 AGE 2014";
 preguntaids[17] = 2700


//  Id pregunta: 2690 Año de creación de pregunta: 2010
 questions[18]= "19)  &iquest;Qu&eacute; Real Decreto define el Esquema Nacional de Interoperabilidad?<br/>";
 choices[18]= new Array();
 choices[18][0] = "RD 4/2010";
 choices[18][1] = "RD 1671/2009";
 choices[18][2] = "RD 4/2009";
 choices[18][3] = "RD 1671/2007";
 answers[18] = 0;
 units[18] = ['45'];
 blocks[18] = ['B1'];
 comments[18] = "Id Pregunta: 2690. ";
 preguntaids[18] = 2690


//  Id pregunta: 2682 Año de creación de pregunta: 2011
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; definido en el Marco Europeo de Interoperabilidad?<br/>";
 choices[19]= new Array();
 choices[19][0] = "Seguridad.";
 choices[19][1] = "Subsidiariedad.";
 choices[19][2] = "Compatibilidad del hardware.";
 choices[19][3] = "Protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[19] = 2;
 units[19] = ['45'];
 blocks[19] = ['B1'];
 comments[19] = "Id Pregunta: 2682. Examen TIC A1 AGE 2010";
 preguntaids[19] = 2682


//  Id pregunta: 2673 Año de creación de pregunta: 2015
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Seguridad?<br/>";
 choices[20]= new Array();
 choices[20][0] = "Proporcionalidad";
 choices[20][1] = "Respeto al derecho de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[20][2] = "Derecho a la garant&iacute;a de seguridad y confidencialidad";
 choices[20][3] = "Gesti&oacute;n de riesgos";
 answers[20] = 3;
 units[20] = ['45'];
 blocks[20] = ['B1'];
 comments[20] = "Id Pregunta: 2673. ";
 preguntaids[20] = 2673


//  Id pregunta: 2709 Año de creación de pregunta: 2015
 questions[21]= "22)  El Esquema Nacional de Interoperabilidad:<br/>";
 choices[21]= new Array();
 choices[21][0] = "Incluye criterios y recomendaciones de seguridad, conservaci&oacute;n y normalizaci&oacute;n de la informaci&oacute;n.";
 choices[21][1] = "Es parte del Esquema Nacional de Seguridad.";
 choices[21][2] = "Fue elaborado por la Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[21][3] = "Considera la utilizaci&oacute;n de est&aacute;ndares cerrados o de uso limitado por los ciudadanos.";
 answers[21] = 0;
 units[21] = ['45'];
 blocks[21] = ['B1'];
 comments[21] = "Id Pregunta: 2709. Art&iacute;culo 1, ENI RD 4/2010";
 preguntaids[21] = 2709


//  Id pregunta: 2764 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale la falsa. De acuerdo con la NTI de Pol&iacute;tica de Firma y Sello Electr&oacute;nicos y de Certificados de la Administraci&oacute;n, para validar la firma electr&oacute;nica:<br/>";
 choices[22]= new Array();
 choices[22][0] = "El primer sello de tiempo dentro de la estructura de la firma se utilizar&aacute; para determinar la fecha de la firma/sello.";
 choices[22][1] = "En caso de que no existan sellos de tiempo, la fecha y hora de la firma no se utilizar&aacute;n para determinar el momento en que se realiz&oacute; la firma.";
 choices[22][2] = "En caso de que no existan sellos de tiempo en la firma, la validaci&oacute;n del certificado se realizar&aacute; en el momento de la validaci&oacute;n de la firma/sello.";
 choices[22][3] = "El campo &quot;certificado del firmante&quot; se utilizar&aacute; para verificar el estado del certificado, y en su caso la cadena de certificaci&oacute;n, en la fecha de la generaci&oacute;n de la firma/sello.";
 answers[22] = 0;
 units[22] = ['45'];
 blocks[22] = ['B1'];
 comments[22] = "Id Pregunta: 2764. NTI";
 preguntaids[22] = 2764


//  Id pregunta: 2768 Año de creación de pregunta: 2016
 questions[23]= "24)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:<br/>";
 choices[23]= new Array();
 choices[23][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados.";
 choices[23][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[23][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[23][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[23] = 2;
 units[23] = ['45'];
 blocks[23] = ['B1'];
 comments[23] = "Id Pregunta: 2768. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[23] = 2768


//  Id pregunta: 2731 Año de creación de pregunta: 2002
 questions[24]= "25)  La gu&iacute;a de portabilidad de X/OPEN actualmente en vigor es:<br/>";
 choices[24]= new Array();
 choices[24][0] = "XGP3";
 choices[24][1] = "XGP4";
 choices[24][2] = "XGP5";
 choices[24][3] = "Todas las respuestas anteriores son correctas";
 answers[24] = 1;
 units[24] = ['45'];
 blocks[24] = ['B1'];
 comments[24] = "Id Pregunta: 2731. ";
 preguntaids[24] = 2731


//  Id pregunta: 2729 Año de creación de pregunta: 2002
 questions[25]= "26)  La definici&oacute;n de un entorno com&uacute;n para portabilidad de Aplicaciones fuente (Homogeneidad de Compiladores, APIs&hellip;) es una de las preocupaciones fundamentales del X/Open (actualmente Open Group) que se conoce como:<br/>";
 choices[25]= new Array();
 choices[25][0] = "XTI";
 choices[25][1] = "CAE";
 choices[25][2] = "APA";
 choices[25][3] = "GOSIP";
 answers[25] = 1;
 units[25] = ['45'];
 blocks[25] = ['B1'];
 comments[25] = "Id Pregunta: 2729. ";
 preguntaids[25] = 2729


//  Id pregunta: 2762 Año de creación de pregunta: 2016
 questions[26]= "27)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto a las caracter&iacute;sticas generales de las copias electr&oacute;nicas aut&eacute;nticas:<br/>";
 choices[26]= new Array();
 choices[26][0] = "Se expedir&aacute;n &uacute;nicamente a partir de documentos con calidad de original.";
 choices[26][1] = "Ser&aacute;n firmadas mediante alguno de los sistemas de firma previstos en la legislaci&oacute;n aplicable.";
 choices[26][2] = "Ser&aacute;n nuevos documentos electr&oacute;nicos que incluir&aacute;n el contenido completo del documento sobre el que se expiden.";
 choices[26][3] = "Sus metadatos tendr&aacute;n los mismos valores que el documento original.";
 answers[26] = 1;
 units[26] = ['45'];
 blocks[26] = ['B1'];
 comments[26] = "Id Pregunta: 2762. NTI";
 preguntaids[26] = 2762


//  Id pregunta: 2744 Año de creación de pregunta: 2002
 questions[27]= "28)  Respecto a las caracter&iacute;sticas de un sistema abierto (es decir, aqu&eacute;l que cumple con las especificaciones de OSI), podemos decir que:<br/>";
 choices[27]= new Array();
 choices[27][0] = "Interoperabilidad es la posibilidad de enlazar ordenadores de distintas marcas con la seguridad de que han de trabajar conjuntamente, dando la sensaci&oacute;n de que funcionan como un &uacute;nico sistema";
 choices[27][1] = "Portabilidad es la posibilidad de que aplicaciones de distintos desarrolladores de software funcionen en m&aacute;quinas de diversos fabricantes";
 choices[27][2] = "Escalabilidad o capacidad de crecimiento es la posibilidad de utilizar el mismo entorno de software en diferentes gamas de ordenadores, desde ordenadores de sobremesa hasta mainframes";
 choices[27][3] = "Todas las respuestas anteriores son correctas";
 answers[27] = 3;
 units[27] = ['45'];
 blocks[27] = ['B1'];
 comments[27] = "Id Pregunta: 2744. ";
 preguntaids[27] = 2744


//  Id pregunta: 2665 Año de creación de pregunta: 2002
 questions[28]= "29)  &iquest;C&oacute;mo se denomina la posibilidad de funcionamiento en distintas plataformas sin necesidad de cambios en el aplicativo?<br/>";
 choices[28]= new Array();
 choices[28][0] = "Interoperatividad";
 choices[28][1] = "Compatibilidad";
 choices[28][2] = "Portabilidad";
 choices[28][3] = "Normalizaci&oacute;n";
 answers[28] = 2;
 units[28] = ['45'];
 blocks[28] = ['B1'];
 comments[28] = "Id Pregunta: 2665. ";
 preguntaids[28] = 2665


//  Id pregunta: 2675 Año de creación de pregunta: 2003
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes no es un &aacute;mbito de interoperabilidad contemplado en el marco europeo de interoperabilidad?<br/>";
 choices[29]= new Array();
 choices[29][0] = "Organizativa";
 choices[29][1] = "T&eacute;cnica";
 choices[29][2] = "Funcional";
 choices[29][3] = "Sem&aacute;ntica";
 answers[29] = 2;
 units[29] = ['45'];
 blocks[29] = ['B1'];
 comments[29] = "Id Pregunta: 2675. ";
 preguntaids[29] = 2675


//  Id pregunta: 2715 Año de creación de pregunta: 2016
 questions[30]= "31)  En cuanto al sistema EGEO, se&ntilde;ale la afirmaci&oacute;n correcta:<br/>";
 choices[30]= new Array();
 choices[30][0] = "Permite la representaci&oacute;n de mapas tem&aacute;ticos, georreferenciados, buscador de recursos georreferenciados con filtros definidos por el usuario, y de magnitud.";
 choices[30][1] = "Utiliza &uacute;nicamente sobre mapas oficiales del Instituto Geogr&aacute;fico Nacional (IGN).";
 choices[30][2] = "Es un servicio com&uacute;n dirigido a &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[30][3] = "Para su manejo, es necesario contar con conocimientos de georreferenciaci&oacute;n.";
 answers[30] = 0;
 units[30] = ['45'];
 blocks[30] = ['B1'];
 comments[30] = "Id Pregunta: 2715. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[30] = 2715


//  Id pregunta: 2761 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto a la NTI de Documento Electr&oacute;nico:<br/>";
 choices[31]= new Array();
 choices[31][0] = "Establece la forma de implementaci&oacute;n a nivel interno de los metadatos que forman parte de un documento electr&oacute;nico.";
 choices[31][1] = "Debe considerarse como el procedimiento de gesti&oacute;n del documento electr&oacute;nico en las Administraciones P&uacute;blicas de su &aacute;mbito de aplicaci&oacute;n.";
 choices[31][2] = "Debe considerarse una referencia de consideraciones relativas a la seguridad del documento, como por ejemplo su posible cifrado.";
 choices[31][3] = "Es de aplicaci&oacute;n &uacute;nicamente a documentos administrativos electr&oacute;nicos.";
 answers[31] = 2;
 units[31] = ['45'];
 blocks[31] = ['B1'];
 comments[31] = "Id Pregunta: 2761. NTI";
 preguntaids[31] = 2761


//  Id pregunta: 2765 Año de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale la respuesta correcta. En relaci&oacute;n a los formatos admitidos por las organizaciones para las firmas/sellos electr&oacute;nicos basadas en certificados electr&oacute;nicos, seg&uacute;n la NTI de Pol&iacute;tica de Firma y Sello Electr&oacute;nicos, &eacute;stos se ajustar&aacute;n a:<br/>";
 choices[32]= new Array();
 choices[32][0] = "Los formatos CAdES, XAdES y PAdES en las versiones establecidas en la Norma T&eacute;cnica de Interoperabilidad de Pol&iacute;tica de firma del 2011.";
 choices[32][1] = "Lo establecido en la NTI de Cat&aacute;logo de est&aacute;ndares.";
 choices[32][2] = "La Decisi&oacute;n de Ejecuci&oacute;n UE 2015/1506 de conformidad con el Reglamento 910/2014 del Parlamento Europeo y del Consejo.";
 choices[32][3] = "Todas las respuestas son correctas.";
 answers[32] = 3;
 units[32] = ['45'];
 blocks[32] = ['B1'];
 comments[32] = "Id Pregunta: 2765. NTI";
 preguntaids[32] = 2765


//  Id pregunta: 2722 Año de creación de pregunta: 2019
 questions[33]= "34)  En relaci&oacute;n con las Normas T&eacute;cnicas de Interoperabilidad (NTI) relacionadas con la gesti&oacute;n documental seleccione la que no forma parte de ellas:<br/>";
 choices[33]= new Array();
 choices[33][0] = "NTI de Pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos.";
 choices[33][1] = "NTI de Digitalizaci&oacute;n de documentos.";
 choices[33][2] = "NTI de Almacenamiento de documentos electr&oacute;nicos.";
 choices[33][3] = "NTI de Pol&iacute;tica de firma electr&oacute;nica y de certificados de la Administraci&oacute;n.";
 answers[33] = 2;
 units[33] = ['45'];
 blocks[33] = ['B1'];
 comments[33] = "Id Pregunta: 2722. Examen TIC A1 AGE 2017";
 preguntaids[33] = 2722


//  Id pregunta: 2705 Año de creación de pregunta: 2016
 questions[34]= "35)  El Esquema de Metadatos para la Gesti&oacute;n del Documento Electr&oacute;nico (e-EMGDE):<br/>";
 choices[34]= new Array();
 choices[34][0] = "Incluye &uacute;nicamente los metadatos m&iacute;nimos obligatorios definidos en las Normas T&eacute;cnicas de Interoperabilidad de Documento electr&oacute;nico y Expediente electr&oacute;nico.";
 choices[34][1] = "Es el esquema de metadatos de uso obligatorio para todas las Administraciones P&uacute;blicas de acuerdo con el Esquema Nacional de Interoperabilidad.";
 choices[34][2] = "Se basa en un modelo entidad-relaci&oacute;n.";
 choices[34][3] = "Ninguna de las respuestas es correcta.";
 answers[34] = 2;
 units[34] = ['45'];
 blocks[34] = ['B1'];
 comments[34] = "Id Pregunta: 2705. NTI";
 preguntaids[34] = 2705


//  Id pregunta: 2698 Año de creación de pregunta: 2013
 questions[35]= "36)  De acuerdo con el Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad, aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n, es la referente a la:<br/>";
 choices[35]= new Array();
 choices[35][0] = "Interoperabilidad, en general.";
 choices[35][1] = "Interoperabilidad organizativa.";
 choices[35][2] = "Interoperabilidad t&eacute;cnica.";
 choices[35][3] = "Interoperabilidad sem&aacute;ntica.";
 answers[35] = 3;
 units[35] = ['45'];
 blocks[35] = ['B1'];
 comments[35] = "Id Pregunta: 2698. Examen GSI A2 AGE 2011";
 preguntaids[35] = 2698


//  Id pregunta: 2701 Año de creación de pregunta: 2011
 questions[36]= "37)  Dentro del contenido m&iacute;nimo de una Sede Electr&oacute;nica NO se encuentra:<br/>";
 choices[36]= new Array();
 choices[36][0] = "Identificaci&oacute;n, &oacute;rgano titular y responsables de gesti&oacute;n.";
 choices[36][1] = "Sistemas de firma electr&oacute;nica que sean admitidos o utilizados en la Sede.";
 choices[36][2] = "Sistemas de verificaci&oacute;n de los certificados de la Sede.";
 choices[36][3] = "Relaci&oacute;n de funcionarios habilitados para actuar ante la Sede.";
 answers[36] = 3;
 units[36] = ['45'];
 blocks[36] = ['B1'];
 comments[36] = "Id Pregunta: 2701. Examen GSI A2 AGE 2010";
 preguntaids[36] = 2701


//  Id pregunta: 2664 Año de creación de pregunta: 2015
 questions[37]= "38)  &iquest;A qu&eacute; se refiere la gu&iacute;a CCN-STIC 804?<br/>";
 choices[37]= new Array();
 choices[37][0] = "Medidas de implantaci&oacute;n del ENS";
 choices[37][1] = "Plan de Adecuaci&oacute;n del ENS";
 choices[37][2] = "Auditor&iacute;a del ENS";
 choices[37][3] = "Normas de seguridad del ENS";
 answers[37] = 0;
 units[37] = ['45'];
 blocks[37] = ['B1'];
 comments[37] = "Id Pregunta: 2664. ";
 preguntaids[37] = 2664


//  Id pregunta: 2728 Año de creación de pregunta: 2002
 questions[38]= "39)  La Decisi&oacute;n del Consejo 87/95/CEE:<br/>";
 choices[38]= new Array();
 choices[38][0] = "Se refiere a normas de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones relativas al intercambio de informaci&oacute;n y de datos y a la interoperabilidad de los sistemas";
 choices[38][1] = "Ha sido derogada por la Ley de Contratos de las Administraciones P&uacute;blicas";
 choices[38][2] = "Afecta a todas las Administraciones P&uacute;blicas";
 choices[38][3] = "No puede aplicarse directamente por los poderes adjudicadores, siendo necesario su trasposici&oacute;n al ordenamiento jur&iacute;dico espa&ntilde;ol";
 answers[38] = 0;
 units[38] = ['45'];
 blocks[38] = ['B1'];
 comments[38] = "Id Pregunta: 2728. ";
 preguntaids[38] = 2728


//  Id pregunta: 2717 Año de creación de pregunta: 2010
 questions[39]= "40)  En el entorno de las Tecnolog&iacute;as de la Informaci&oacute;n, la Comisi&oacute;n Soto sirvi&oacute; para:<br/>";
 choices[39]= new Array();
 choices[39][0] = "impulsar la creaci&oacute;n del Consejo Superior de Inform&aacute;tica.";
 choices[39][1] = "impulsar el modelo de crecimiento aut&oacute;nomo de cada departamento ministerial en materia de Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[39][2] = "Revisar, en base a la Ley 11/2007, los modelos de organizaci&oacute;n de las Tecnolog&iacute;as de la Informaci&oacute;n creados anteriormente.";
 choices[39][3] = "impulsar el desarrollo de la Sociedad de la Informaci&oacute;n.";
 answers[39] = 3;
 units[39] = ['45'];
 blocks[39] = ['B1'];
 comments[39] = "Id Pregunta: 2717. Examen TIC A1 AGE 2013";
 preguntaids[39] = 2717


//  Id pregunta: 2738 Año de creación de pregunta: 2010
 questions[40]= "41)  Las normas t&eacute;cnicas de interoperabilidad:<br/>";
 choices[40]= new Array();
 choices[40][0] = "Las aprobar&aacute; el Ministerio de la Presidencia, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica y las publicar&aacute; mediante Resoluci&oacute;n de la Secretaria de Estado para la Funci&oacute;n P&uacute;blica.";
 choices[40][1] = "Las aprobar&aacute; la Secretaria de Estado para la Funci&oacute;n P&uacute;blica, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica y las publicar&aacute; el Ministerio de la Presidencia mediante Orden Ministerial.";
 choices[40][2] = "Las aprobar&aacute; el Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica y las publicar&aacute; mediante Resoluci&oacute;n de la Secretaria de Estado para la Funci&oacute;n P&uacute;blica.";
 choices[40][3] = "Las aprobar&aacute; el Ministerio de la Presidencia, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica y las publicar&aacute; mediante Real Decreto.";
 answers[40] = 0;
 units[40] = ['45'];
 blocks[40] = ['B1'];
 comments[40] = "Id Pregunta: 2738. Disposici&oacute;n adicional primera ENI";
 preguntaids[40] = 2738


//  Id pregunta: 2670 Año de creación de pregunta: 2010
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes normas t&eacute;cnicas no est&aacute;n contempladas en el Esquema Nacional de Interoperabilidad?<br/>";
 choices[41]= new Array();
 choices[41][0] = "Digitalizaci&oacute;n de documentos";
 choices[41][1] = "Pol&iacute;tica de gesti&oacute;n de documentos";
 choices[41][2] = "Copiado aut&eacute;ntico y conversi&oacute;n de documentos";
 choices[41][3] = "Destrucci&oacute;n de documentos en soporte papel";
 answers[41] = 3;
 units[41] = ['45'];
 blocks[41] = ['B1'];
 comments[41] = "Id Pregunta: 2670. Disposici&oacute;n adicional primera";
 preguntaids[41] = 2670


//  Id pregunta: 2779 Año de creación de pregunta: 2020
 questions[42]= "43)  El Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica define la interoperabilidad sem&aacute;ntica como:<br/>";
 choices[42]= new Array();
 choices[42][0] = "aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n.";
 choices[42][1] = "aquella dimensi&oacute;n de la interoperabilidad relativa a la capacidad de las administraciones de colaborar con el objeto de alcanzar los objetivos de los servicios que prestan.";
 choices[42][2] = "aquella dimensi&oacute;n de la interoperabilidad relativa a la relaci&oacute;n entre sistemas y servicios de tecnolog&iacute;as de la informaci&oacute;n, incluyendo aspectos tales como las interfaces, la interconexi&oacute;n, la integraci&oacute;n de datos y servicios, la presentaci&oacute;n de la informaci&oacute;n, la accesibilidad y la seguridad, u otros de naturaleza an&aacute;loga.";
 choices[42][3] = "aquella dimensi&oacute;n de la interoperabilidad relativa a la interacci&oacute;n entre entidades p&uacute;blicas, que se manifiesta especialmente en la conservaci&oacute;n de la informaci&oacute;n en soporte electr&oacute;nico.";
 answers[42] = 0;
 units[42] = ['45'];
 blocks[42] = ['B1'];
 comments[42] = "Id Pregunta: 2779. Examen SSTI A1 Xunta de Galicia 2018 Promoci&oacute;n Interna";
 preguntaids[42] = 2779


//  Id pregunta: 2723 Año de creación de pregunta: 2002
 questions[43]= "44)  En relaci&oacute;n con los sistemas abiertos, las caracter&iacute;sticas t&eacute;cnicas m&aacute;s com&uacute;nmente citadas son:<br/>";
 choices[43]= new Array();
 choices[43][0] = "Interoperabilidad, consistencia y escalabilidad";
 choices[43][1] = "Interoperabilidad, conectividad e integrabilidad";
 choices[43][2] = "Consistencia, portabilidad e integrabilidad";
 choices[43][3] = "Interoperabilidad, portabilidad y escalabilidad";
 answers[43] = 3;
 units[43] = ['45'];
 blocks[43] = ['B1'];
 comments[43] = "Id Pregunta: 2723. ";
 preguntaids[43] = 2723


//  Id pregunta: 2714 Año de creación de pregunta: 2007
 questions[44]= "45)  El uso de Sistemas Abiertos permite una serie de ventajas, indique cu&aacute;l de ellas no lo es:<br/>";
 choices[44]= new Array();
 choices[44][0] = "Mejorar, en general, la relaci&oacute;n precio/rendimiento.";
 choices[44][1] = "Garantiza la libertad de elecci&oacute;n.";
 choices[44][2] = "Facilita la gesti&oacute;n del sistema frente a los complejos sistemas propietarios.";
 choices[44][3] = "Protege la inversi&oacute;n realizada en el equipo f&iacute;sico.";
 answers[44] = 2;
 units[44] = ['45'];
 blocks[44] = ['B1'];
 comments[44] = "Id Pregunta: 2714. Examen TIC A1 Junta de Castilla y Le&oacute;n 2006";
 preguntaids[44] = 2714


//  Id pregunta: 2695 Año de creación de pregunta: 2002
 questions[45]= "46)  De acuerdo a la Decisi&oacute;n 87/95/CEE del Consejo de las CC.EE., &iquest;en qu&eacute; circunstancias excepcionales el sector p&uacute;blico puede adquirir bienes y servicios relativos al campo de las TIC utilizando especificaciones no normalizadas?<br/>";
 choices[45]= new Array();
 choices[45][0] = "Continuidad de funcionamiento";
 choices[45][1] = "Innovaci&oacute;n";
 choices[45][2] = "Coste excesivo";
 choices[45][3] = "Todas las anteriores";
 answers[45] = 3;
 units[45] = ['45'];
 blocks[45] = ['B1'];
 comments[45] = "Id Pregunta: 2695. ";
 preguntaids[45] = 2695


//  Id pregunta: 2710 Año de creación de pregunta: 2002
 questions[46]= "47)  El Modelo de Referencia para la Interconexi&oacute;n de Sistemas Abiertos queda especificado en la norma ISO:<br/>";
 choices[46]= new Array();
 choices[46][0] = "ISO 7498";
 choices[46][1] = "ISO 9735";
 choices[46][2] = "ISO 9075";
 choices[46][3] = "ISO 9945-1";
 answers[46] = 0;
 units[46] = ['45'];
 blocks[46] = ['B1'];
 comments[46] = "Id Pregunta: 2710. ";
 preguntaids[46] = 2710


//  Id pregunta: 2684 Año de creación de pregunta: 2016
 questions[47]= "48)  &iquest;Cu&aacute;les de las siguientes tareas podr&iacute;an ser llevadas a cabo por la misma persona dentro de un departamento de sistemas de informaci&oacute;n sin repercusiones negativas para el control y la seguridad?<br/>";
 choices[47]= new Array();
 choices[47][0] = "Administraci&oacute;n de seguridad y gesti&oacute;n de cambios.";
 choices[47][1] = "Operaciones de producci&oacute;n y desarrollo de sistemas.";
 choices[47][2] = "Desarrollo de sistemas y gesti&oacute;n de cambios.";
 choices[47][3] = "Desarrollo de sistemas y mantenimiento de sistemas.";
 answers[47] = 3;
 units[47] = ['45'];
 blocks[47] = ['B1'];
 comments[47] = "Id Pregunta: 2684. Examen GSI A2 AGE 2008 Promoci&oacute;n Interna";
 preguntaids[47] = 2684


//  Id pregunta: 2666 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes definiciones NO es uno de los roles de la Plataforma de Intermediaci&oacute;n, seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos?<br/>";
 choices[48]= new Array();
 choices[48][0] = "Mantendr&aacute; un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 choices[48][1] = "Almacenar&aacute; informaci&oacute;n personal de ciudadano derivada de la transacci&oacute;n de intercambio de datos, asegurando para ello la confidencialidad e integridad de la misma a trav&eacute;s de los mecanismos correspondientes.";
 choices[48][2] = "Mantendr&aacute; un centro de atenci&oacute;n a usuarios e integradores que canalice todas las incidencias relativas al sistema.";
 choices[48][3] = "Las consultas a los servicios de verificaci&oacute;n de datos, se pueden realizar de forma automatizada desde una aplicaci&oacute;n de gesti&oacute;n de un tr&aacute;mite, adaptadas para invocar los Webservice proporcionados por el servicio.";
 answers[48] = 1;
 units[48] = ['45'];
 blocks[48] = ['B1'];
 comments[48] = "Id Pregunta: 2666. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[48] = 2666


//  Id pregunta: 2712 Año de creación de pregunta: 2013
 questions[49]= "50)  El Real Decreto 3/2010, en su art&iacute;culo 29, dispone que las gu&iacute;as de seguridad de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones para el mejor cumplimiento de lo establecido en el Esquema Nacional de Seguridad las elaborar&aacute; y difundir&aacute;:<br/>";
 choices[49]= new Array();
 choices[49][0] = "El Centro Criptol&oacute;gico Nacional.";
 choices[49][1] = "La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[49][2] = "Cada organismo p&uacute;blico que implante medidas de seguridad de acuerdo con el Esquema Nacional de Seguridad.";
 choices[49][3] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 answers[49] = 0;
 units[49] = ['45'];
 blocks[49] = ['B1'];
 comments[49] = "Id Pregunta: 2712. Examen GSI A2 AGE 2011 Promoci&oacute;n Interna";
 preguntaids[49] = 2712


//  Id pregunta: 2737 Año de creación de pregunta: 2002
 questions[50]= "51)  Las caracter&iacute;sticas fundamentales que se buscan con los sistemas abiertos son:<br/>";
 choices[50]= new Array();
 choices[50][0] = "Interoperabilidad, escalabilidad y portabilidad";
 choices[50][1] = "Sistemas multiproceso, multiusuario y multitarea compuestos por componentes de diversos fabricantes";
 choices[50][2] = "Poder pasar de un ordenador de sobremesa a un gran mainframe sin tener que cambiar de entorno de trabajo";
 choices[50][3] = "Interconexi&oacute;n de sistemas bajo un mismo sistema operativo, conectividad de perif&eacute;ricos, un entorno consistente en productos y tecnolog&iacute;as y un mejor posicionamiento desde el punto de vista econ&oacute;mico";
 answers[50] = 0;
 units[50] = ['45'];
 blocks[50] = ['B1'];
 comments[50] = "Id Pregunta: 2737. ";
 preguntaids[50] = 2737


//  Id pregunta: 2750 Año de creación de pregunta: 2010
 questions[51]= "52)  Seg&uacute;n el Esquema Nacional de Interoperabilidad, un esquema abierto es aquel que cumple las siguientes condiciones:<br/>";
 choices[51]= new Array();
 choices[51][0] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita o a un coste que no suponga una dificultad de acceso, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial.";
 choices[51][1] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial.";
 choices[51][2] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial, o que este pago no suponga una dificultad de acceso.";
 choices[51][3] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita o a un coste que no suponga una dificultad de acceso, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial o que este pago no suponga una dificultad de acceso.";
 answers[51] = 0;
 units[51] = ['45'];
 blocks[51] = ['B1'];
 comments[51] = "Id Pregunta: 2750. Anexo ENI";
 preguntaids[51] = 2750


//  Id pregunta: 2677 Año de creación de pregunta: 2015
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes no es un derecho de los ciudadanos de acuerdo con la ley 39/2015?<br/>";
 choices[52]= new Array();
 choices[52][0] = "A relacionarse directamente con las AAPP";
 choices[52][1] = "A no aportar datos y documentos que obren en poder de las Administraciones P&uacute;blicas";
 choices[52][2] = "A la conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicos de los documentos electr&oacute;nicos que formen parte de un expediente por duplicado";
 choices[52][3] = "A elegir en cada momento el canal a trav&eacute;s del cual se relacionen con la Administraci&oacute;n";
 answers[52] = 2;
 units[52] = ['45'];
 blocks[52] = ['B1'];
 comments[52] = "Id Pregunta: 2677. ";
 preguntaids[52] = 2677


//  Id pregunta: 2716 Año de creación de pregunta: 2016
 questions[53]= "54)  En el contexto del Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n electr&oacute;nica, indique cu&aacute;l es el t&eacute;rmino para definir aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n:<br/>";
 choices[53]= new Array();
 choices[53][0] = "Interoperabilidad Organizativa.";
 choices[53][1] = "Interoperabilidad Sem&aacute;ntica.";
 choices[53][2] = "Interoperabilidad T&eacute;cnica.";
 choices[53][3] = "Interoperabilidad en el Tiempo.";
 answers[53] = 1;
 units[53] = ['45'];
 blocks[53] = ['B1'];
 comments[53] = "Id Pregunta: 2716. Examen SSTI A1 Xunta de Galicia 2011";
 preguntaids[53] = 2716


//  Id pregunta: 2763 Año de creación de pregunta: 2013
 questions[54]= "55)  Se&ntilde;ale la FALSA respecto a los criterios de seguridad, normalizaci&oacute;n y conservaci&oacute;n:<br/>";
 choices[54]= new Array();
 choices[54][0] = "Son las recomendaciones sobre normalizaci&oacute;n e interoperabilidad seguidas por la administraci&oacute;n.";
 choices[54][1] = "Fueron elaboradas por el Consejo Superior de Inform&aacute;tica a ra&iacute;z del RD 209/2003.";
 choices[54][2] = "Consta de tres libros o gu&iacute;as: criterios de seguridad, de normalizaci&oacute;n y de conservaci&oacute;n.";
 choices[54][3] = "Todas son verdaderas.";
 answers[54] = 3;
 units[54] = ['45'];
 blocks[54] = ['B1'];
 comments[54] = "Id Pregunta: 2763. ";
 preguntaids[54] = 2763


//  Id pregunta: 2678 Año de creación de pregunta: 2010
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes no es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?<br/>";
 choices[55]= new Array();
 choices[55][0] = "La interoperabilidad como cualidad integral.";
 choices[55][1] = "Car&aacute;cter multidimensional de la interoperabilidad.";
 choices[55][2] = "Enfoque de soluciones multilaterales.";
 choices[55][3] = "Todos los anteriores son principios b&aacute;sicos del Esquema Nacional de Interoperabilidad.";
 answers[55] = 3;
 units[55] = ['45'];
 blocks[55] = ['B1'];
 comments[55] = "Id Pregunta: 2678. Art&iacute;culo 4 ENI";
 preguntaids[55] = 2678


//  Id pregunta: 2692 Año de creación de pregunta: 2006
 questions[56]= "57)  Cu&aacute;l de las siguientes afirmaciones sobre sistemas abiertos es incorrecta:<br/>";
 choices[56]= new Array();
 choices[56][0] = "El modelo b&aacute;sico de referencia para la Interconexi&oacute;n de Sistemas Abiertos de ISO consiste en la arquitectura OSI, que se basa en las especificaciones de IEEE.";
 choices[56][1] = "La instituci&oacute;n p&uacute;blica IEEE genera las normas m&aacute;s avanzadas dentro del campo de estandarizaci&oacute;n de redes locales.";
 choices[56][2] = "El programa ISA2 tiene como uno de sus fines facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[56][3] = "NIST fija los est&aacute;ndares federales de tratamiento de la informaci&oacute;n que las agencias gubernamentales deben seguir en la contrataci&oacute;n de software y hardware.";
 answers[56] = 1;
 units[56] = ['45'];
 blocks[56] = ['B1'];
 comments[56] = "Id Pregunta: 2692. ";
 preguntaids[56] = 2692


//  Id pregunta: 2711 Año de creación de pregunta: 2013
 questions[57]= "58)  El programa ISA contempla una serie de grupos de acciones o &ldquo;clusters&rdquo;. Entre ellos NO se encuentra:<br/>";
 choices[57]= new Array();
 choices[57][0] = "Intercambio de Informaci&oacute;n en confianza";
 choices[57][1] = "Arquitectura de Interoperabilidad";
 choices[57][2] = "Evaluaci&oacute;n de las implicaciones, en materia TIC, de la nueva legislaci&oacute;n de la UE";
 choices[57][3] = "Despliegue de redes de nueva generaci&oacute;n";
 answers[57] = 3;
 units[57] = ['45'];
 blocks[57] = ['B1'];
 comments[57] = "Id Pregunta: 2711. Fuente: http://ec.europa.eu/isa/actions/index_en.htm";
 preguntaids[57] = 2711


//  Id pregunta: 2667 Año de creación de pregunta: 2014
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes medidas de seguridad NO pertenece al grupo &quot;Medidas de protecci&oacute;n [mp]&quot; seg&uacute;n el RD 3/2010 (Esquema Nacional de Seguridad)?<br/>";
 choices[58]= new Array();
 choices[58][0] = "Detecci&oacute;n de intrusi&oacute;n.";
 choices[58][1] = "Formaci&oacute;n.";
 choices[58][2] = "Desarrollo.";
 choices[58][3] = "Energ&iacute;a el&eacute;ctrica.";
 answers[58] = 0;
 units[58] = ['45'];
 blocks[58] = ['B1'];
 comments[58] = "Id Pregunta: 2667. Examen GSI A2 AGE 2013";
 preguntaids[58] = 2667


//  Id pregunta: 2683 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l es el servicio com&uacute;n que permitir&aacute; la tramitaci&oacute;n por medios electr&oacute;nicos de todo el ciclo de vida involucrado en la concesi&oacute;n de ayudas provenientes de los fondos FEDER?<br/>";
 choices[59]= new Array();
 choices[59][0] = "IRIA";
 choices[59][1] = "GALATEA";
 choices[59][2] = "BADARAL";
 choices[59][3] = "SOROLLA";
 answers[59] = 1;
 units[59] = ['45'];
 blocks[59] = ['B1'];
 comments[59] = "Id Pregunta: 2683. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[59] = 2683


//  Id pregunta: 2707 Año de creación de pregunta: 2010
 questions[60]= "61)  El Esquema Nacional de Interoperabilidad establece que las Administraciones p&uacute;blicas utilizar&aacute;n preferentemente la Red de comunicaciones de las Administraciones p&uacute;blicas espa&ntilde;olas para comunicarse entre s&iacute;. La red que prestar&aacute; este servicio recibe el nombre de:<br/>";
 choices[60]= new Array();
 choices[60][0] = "InterAdmon";
 choices[60][1] = "TESTA";
 choices[60][2] = "SARA";
 choices[60][3] = "El Esquema Nacional de Interoperabilidad no establece el uso de una red determinada";
 answers[60] = 2;
 units[60] = ['45'];
 blocks[60] = ['B1'];
 comments[60] = "Id Pregunta: 2707. Art&iacute;culo 13 ENI";
 preguntaids[60] = 2707


//  Id pregunta: 2730 Año de creación de pregunta: 2002
 questions[61]= "62)  La escalabilidad es:<br/>";
 choices[61]= new Array();
 choices[61][0] = "Un caso particular de la portabilidad";
 choices[61][1] = "La capacidad de utilizar el mismo entorno de software en diferentes clases de ordenadores";
 choices[61][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 choices[61][3] = "Una propiedad que se da &uacute;nicamente en el mundo Unix";
 answers[61] = 2;
 units[61] = ['45'];
 blocks[61] = ['B1'];
 comments[61] = "Id Pregunta: 2730. ";
 preguntaids[61] = 2730


//  Id pregunta: 2747 Año de creación de pregunta: 2016
 questions[62]= "63)  Respecto al Sistema de Informaci&oacute;n Administrativa, se&ntilde;ale la respuesta falsa:<br/>";
 choices[62]= new Array();
 choices[62][0] = "Contiene la relaci&oacute;n de procedimientos y servicios de la AGE, y de todas las administraciones participantes.";
 choices[62][1] = "Cumple para la AGE el requisito establecido en el art&iacute;culo 9 del Esquema Nacional de Interoperabilidad, que obliga a las Administraciones p&uacute;blicas a mantener actualizado un Inventario de Informaci&oacute;n Administrativa.";
 choices[62][2] = "SIA est&aacute; dise&ntilde;ado para permitir la administraci&oacute;n distribuida y la actualizaci&oacute;n corresponsable por todas las Administraciones participantes, mediante una aplicaci&oacute;n web.";
 choices[62][3] = "Los usuarios son gestionados por una red de responsables de cada Departamento.";
 answers[62] = 2;
 units[62] = ['45'];
 blocks[62] = ['B1'];
 comments[62] = "Id Pregunta: 2747. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[62] = 2747


//  Id pregunta: 2773 Año de creación de pregunta: 2020
 questions[63]= "64)  &iquest;Cu&aacute;l o cu&aacute;les son los principios espec&iacute;ficos de la interoperabilidad de acuerdo con el Real Decreto 4/2010 do 8 de enero por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n electr&oacute;nica?<br/>";
 choices[63]= new Array();
 choices[63][0] = "La accesibilidad por medios electr&oacute;nicos de los ciudadanos de nacionalidad espa&ntilde;ola a las Administraciones p&uacute;blicas de &aacute;mbito local, provincial, auton&oacute;mico o estatal.";
 choices[63][1] = "Son tres: la interoperabilidad como calidad integral. Car&aacute;cter multidimensional de la interoperabilidad. Enfoque de soluciones multilaterales.";
 choices[63][2] = "Los mecanismos p&uacute;blicos para garantizar la seguridad en las comunicaciones electr&oacute;nicas entre los ciudadanos y los organismos oficiales en el &aacute;mbito competencial de las Comunidades Aut&oacute;nomas.";
 choices[63][3] = "Son tres: se pueden ejecutar para cualquier prop&oacute;sito. Permiten conocer su c&oacute;digo fuente. Se pueden modificar o mejorar.";
 answers[63] = 1;
 units[63] = ['45'];
 blocks[63] = ['B1'];
 comments[63] = "Id Pregunta: 2773. Examen SSTI A1 Xunta de Galicia 2018 Promoci&oacute;n Interna";
 preguntaids[63] = 2773


//  Id pregunta: 2685 Año de creación de pregunta: 2010
 questions[64]= "65)  &iquest;Cu&aacute;les son las dimensiones de la interoperabilidad seg&uacute;n el Marco Europeo de Interoperabilidad vigente?<br/>";
 choices[64]= new Array();
 choices[64][0] = "Legal, organizativa, sem&aacute;ntica y t&eacute;cnica.";
 choices[64][1] = "Organizativa, sem&aacute;ntica y t&eacute;cnica.";
 choices[64][2] = "Organizativa, ling&uuml;&iacute;stica e inform&aacute;tica.";
 choices[64][3] = "Ninguna, porque el Marco Europeo de Interoperabilidad no est&aacute; todav&iacute;a adoptado por la Comisi&oacute;n Europea.";
 answers[64] = 0;
 units[64] = ['45'];
 blocks[64] = ['B1'];
 comments[64] = "Id Pregunta: 2685. Examen TIC A1 AGE 2009";
 preguntaids[64] = 2685


//  Id pregunta: 2697 Año de creación de pregunta: 2014
 questions[65]= "66)  De acuerdo con el programa IDABC, entre los principios que define el Marco Europeo de Interoperabilidad NO se encuentra:<br/>";
 choices[65]= new Array();
 choices[65][0] = "el multiling&uuml;ismo.";
 choices[65][1] = "la accesibilidad.";
 choices[65][2] = "el procedimiento compartido.";
 choices[65][3] = "la subsidiaridad.";
 answers[65] = 2;
 units[65] = ['45'];
 blocks[65] = ['B1'];
 comments[65] = "Id Pregunta: 2697. Examen TIC A1 AGE 2013";
 preguntaids[65] = 2697


//  Id pregunta: 2760 Año de creación de pregunta: 2015
 questions[66]= "67)  Se&ntilde;ale cu&aacute;l no es uno de los principios del Marco Europeo de Interoperabilidad:<br/>";
 choices[66]= new Array();
 choices[66][0] = "Subsidiariedad y proporcionalidad";
 choices[66][1] = "Multiling&uuml;ismo";
 choices[66][2] = "Conservaci&oacute;n de la informaci&oacute;n";
 choices[66][3] = "Efectividad y eficiencia";
 answers[66] = 3;
 units[66] = ['45'];
 blocks[66] = ['B1'];
 comments[66] = "Id Pregunta: 2760. ";
 preguntaids[66] = 2760


//  Id pregunta: 2699 Año de creación de pregunta: 2016
 questions[67]= "68)  De acuerdo con la NTI de Pol&iacute;tica de Firma y Sello Electr&oacute;nicos y de Certificados de la Administraci&oacute;n, el sellado de tiempo y la informaci&oacute;n de validaci&oacute;n podr&aacute;n ser a&ntilde;adidos por:<br/>";
 choices[67]= new Array();
 choices[67][0] = "El emisor, el receptor o un tercero.";
 choices[67][1] = "&Uacute;nicamente por el emisor.";
 choices[67][2] = "&Uacute;nicamente por el receptor.";
 choices[67][3] = "&Uacute;nicamente por el emisor o el receptor.";
 answers[67] = 0;
 units[67] = ['45'];
 blocks[67] = ['B1'];
 comments[67] = "Id Pregunta: 2699. NTI";
 preguntaids[67] = 2699


//  Id pregunta: 2771 Año de creación de pregunta: 2016
 questions[68]= "69)  Un ejemplo de servicio de interoperabilidad es el Servicio de Verificaci&oacute;n de Identidad. Indique cu&aacute;l de las siguientes afirmaciones NO es correcta:<br/>";
 choices[68]= new Array();
 choices[68][0] = "Permite la verificaci&oacute;n de los datos de identidad de un ciudadano sin que &eacute;ste presente la fotocopia del documento de identidad para aportar al expediente.";
 choices[68][1] = "Se puede utilizar siempre que el ciudadano preste su consentimiento para ello.";
 choices[68][2] = "Es una informaci&oacute;n facilitada por la Direcci&oacute;n General de la Polic&iacute;a a trav&eacute;s de la Plataforma de intermediaci&oacute;n de la Administraci&oacute;n General del Estado.";
 choices[68][3] = "Se puede utilizar en cualquier momento de la tramitaci&oacute;n de un expediente administrativo, y por ser utilizado por una administraci&oacute;n p&uacute;blica no requiere consentimiento expreso del ciudadano.";
 answers[68] = 3;
 units[68] = ['45'];
 blocks[68] = ['B1'];
 comments[68] = "Id Pregunta: 2771. Examen SSTI A1 Xunta de Galicia 2011";
 preguntaids[68] = 2771


//  Id pregunta: 2734 Año de creación de pregunta: 2010
 questions[69]= "70)  La posibilidad de que las aplicaciones software puedan funcionar en m&aacute;quinas de distintos fabricantes y arquitecturas se denomina:<br/>";
 choices[69]= new Array();
 choices[69][0] = "Adaptabilidad";
 choices[69][1] = "Portabilidad";
 choices[69][2] = "Interoperabilidad";
 choices[69][3] = "Escalabilidad";
 answers[69] = 1;
 units[69] = ['45'];
 blocks[69] = ['B1'];
 comments[69] = "Id Pregunta: 2734. Examen TIC A1 Castilla La Mancha 2009";
 preguntaids[69] = 2734


//  Id pregunta: 2680 Año de creación de pregunta: 2014
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes no es un principio del programa ISA (soluciones de interoperabilidad para las administraciones p&uacute;blicas europeas)?<br/>";
 choices[70]= new Array();
 choices[70][0] = "Neutralidad con respecto a la tecnolog&iacute;a y adaptabilidad";
 choices[70][1] = "Reutilizaci&oacute;n";
 choices[70][2] = "Privacidad y protecci&oacute;n de los datos personales";
 choices[70][3] = "Fomento del uso de software libre y sistemas abiertos";
 answers[70] = 3;
 units[70] = ['45'];
 blocks[70] = ['B1'];
 comments[70] = "Id Pregunta: 2680. El programa ISA se basa en los siguientes principios: neutralidad con respecto a la tecnolog&iacute;a y adaptabilidad, apertura, reutilizaci&oacute;n, privacidad y protecci&oacute;n de los datos personales, seguridad";
 preguntaids[70] = 2680


//  Id pregunta: 2767 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la respuesta falsa. Seg&uacute;n la Norma t&eacute;cnica de interoperabilidad de reutilizaci&oacute;n de recursos de informaci&oacute;n:<br/>";
 choices[71]= new Array();
 choices[71][0] = "Se considerar&aacute;n prioritarios los documentos y recursos de mayor relevancia y potencial social y econ&oacute;mico.";
 choices[71][1] = "Los documentos y recursos de informaci&oacute;n reutilizables ser&aacute;n primarios.";
 choices[71][2] = "El nivel granular ser&aacute; el m&aacute;s fino posible.";
 choices[71][3] = "Existir&aacute; una &uacute;nica forma de representaci&oacute;n asociada a cada recurso de informaci&oacute;n de forma que &eacute;ste sea identificado un&iacute;vocamente.";
 answers[71] = 3;
 units[71] = ['45'];
 blocks[71] = ['B1'];
 comments[71] = "Id Pregunta: 2767. NTI";
 preguntaids[71] = 2767


//  Id pregunta: 2706 Año de creación de pregunta: 2011
 questions[72]= "73)  El Esquema Nacional de Interoperabilidad (ENI) se&ntilde;ala que las condiciones de licenciamiento de las aplicaciones y documentaci&oacute;n asociada tendr&aacute;n en cuenta que el fin perseguido es el aprovechamiento y la reutilizaci&oacute;n. Para este fin, &iquest;qu&eacute; tipo de licenciamiento indica expresamente el ENI que se procurar&aacute; aplicar?<br/>";
 choices[72]= new Array();
 choices[72][0] = "Licencia IDABC.";
 choices[72][1] = "Licencia de C&oacute;digo Abierto del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[72][2] = "Licencia P&uacute;blica de la Uni&oacute;n Europea.";
 choices[72][3] = "Licencia Shareware.";
 answers[72] = 2;
 units[72] = ['45'];
 blocks[72] = ['B1'];
 comments[72] = "Id Pregunta: 2706. Examen TIC A1 AGE 2010";
 preguntaids[72] = 2706


//  Id pregunta: 2745 Año de creación de pregunta: 2016
 questions[73]= "74)  Respecto a las comunicaciones y notificaciones electr&oacute;nicas:<br/>";
 choices[73]= new Array();
 choices[73][0] = "El servicio SIM se utiliza para el env&iacute;o de notificaciones electr&oacute;nicas.";
 choices[73][1] = "El Servicio compartido la gesti&oacute;n de notificaciones Notific@, ser&aacute; de uso obligatorio para la AGE y sus OOPP en 2017.";
 choices[73][2] = "La plataforma Notific@, recibe desde los organismos emisores, las comunicaciones y adem&aacute;s de aportar otros valores a&ntilde;adidos, las pone a disposici&oacute;n de los destinatarios en la Carpeta Ciudadana.";
 choices[73][3] = "El servicio SIM, que se ha integrado en el Servicio compartido de gesti&oacute;n de notificaciones, proporciona a los ciudadanos y empresas un buz&oacute;n seguro.";
 answers[73] = 1;
 units[73] = ['45'];
 blocks[73] = ['B1'];
 comments[73] = "Id Pregunta: 2745. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[73] = 2745


//  Id pregunta: 2743 Año de creación de pregunta: 2016
 questions[74]= "75)  Respecto a la carpeta ciudadana, se&ntilde;ale la respuesta incorrecta:<br/>";
 choices[74]= new Array();
 choices[74][0] = "Se trata de un &aacute;rea personal en la que cualquier ciudadano disponga de toda su informaci&oacute;n custodiada y gestionada por parte de la Administraci&oacute;n General del Estado.";
 choices[74][1] = "Permite comprobar el Estado de los expedientes con distintos organismos.";
 choices[74][2] = "La autenticaci&oacute;n del ciudadano se realiza a trav&eacute;s de certificados digitales.";
 choices[74][3] = "Muestra al ciudadano los Apoderamientos del Registro Electr&oacute;nico de Apoderamientos (REA), tanto para los poderdantes como los apoderados, posibilitando la revocaci&oacute;n y la renuncia respectivamente.";
 answers[74] = 2;
 units[74] = ['45'];
 blocks[74] = ['B1'];
 comments[74] = "Id Pregunta: 2743. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[74] = 2743


//  Id pregunta: 2755 Año de creación de pregunta: 2016
 questions[75]= "76)  Seg&uacute;n la Norma t&eacute;cnica de interoperabilidad de reutilizaci&oacute;n de recursos de informaci&oacute;n:<br/>";
 choices[75]= new Array();
 choices[75][0] = "Existir&aacute; una &uacute;nica forma de representaci&oacute;n asociada a cada recurso de informaci&oacute;n de forma que &eacute;ste sea identificado un&iacute;vocamente.";
 choices[75][1] = "Para la composici&oacute;n de los identificadores de recursos uniformes se usar&aacute; un esquema consistente, extensible y persistente.";
 choices[75][2] = "El identificador de recursos uniforme que identifica cada documento o recurso, proporcionar&aacute; informaci&oacute;n sobre la implementaci&oacute;n t&eacute;cnica de generaci&oacute;n del recurso representado.";
 choices[75][3] = "El identificador del recurso deber&aacute; ser, en la medida de lo posible, interpretable &uacute;nicamente de forma automatizada, evitando proporcionar informaci&oacute;n sobre el propio recurso, as&iacute; como su procedencia.";
 answers[75] = 1;
 units[75] = ['45'];
 blocks[75] = ['B1'];
 comments[75] = "Id Pregunta: 2755. NTI";
 preguntaids[75] = 2755


//  Id pregunta: 2671 Año de creación de pregunta: 2010
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes sentencias corresponde con la definici&oacute;n de Interoperabilidad Sem&aacute;ntica dada por el Esquema Nacional de Interoperabilidad?<br/>";
 choices[76]= new Array();
 choices[76][0] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la capacidad de las entidades y de los procesos a trav&eacute;s de los cuales llevan a cabo sus actividades para colaborar con el objeto de alcanzar logros mutuamente acordados relativos a los servicios que prestan.";
 choices[76][1] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n.";
 choices[76][2] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la relaci&oacute;n entre sistemas y servicios de tecnolog&iacute;as de la informaci&oacute;n, incluyendo aspectos tales como las interfaces, la interconexi&oacute;n, la integraci&oacute;n de datos y servicios, la presentaci&oacute;n de la informaci&oacute;n, la accesibilidad y la seguridad, u otros de naturaleza an&aacute;loga.";
 choices[76][3] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la interacci&oacute;n entre elementos que corresponden a diversas oleadas tecnol&oacute;gicas; se manifiesta especialmente en la conservaci&oacute;n de la informaci&oacute;n en soporte electr&oacute;nico.";
 answers[76] = 1;
 units[76] = ['45'];
 blocks[76] = ['B1'];
 comments[76] = "Id Pregunta: 2671. Anexo ENI";
 preguntaids[76] = 2671


//  Id pregunta: 2672 Año de creación de pregunta: 2011
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?<br/>";
 choices[77]= new Array();
 choices[77][0] = "Enfoque de soluciones multilaterales";
 choices[77][1] = "Utilizaci&oacute;n de la Red SARA como Red de comunicaciones de las Administraciones p&uacute;blicas espa&ntilde;olas";
 choices[77][2] = "Interoperabilidad sem&aacute;ntica";
 choices[77][3] = "Ninguno de los anteriores";
 answers[77] = 0;
 units[77] = ['45'];
 blocks[77] = ['B1'];
 comments[77] = "Id Pregunta: 2672. ";
 preguntaids[77] = 2672


//  Id pregunta: 2780 Año de creación de pregunta: 2020
 questions[78]= "79)  Las Administraciones p&uacute;blicas adoptar&aacute;n las medidas organizativas y t&eacute;cnicas necesarias con el fin de garantizar la interoperabilidad en relaci&oacute;n con la recuperaci&oacute;n y conservaci&oacute;n de los documentos electr&oacute;nicos a lo largo de su ciclo de vida. De estas medidas, &iquest;cu&aacute;l NO est&aacute; contemplada en el Esquema Nacional de Interoperabilidad?<br/>";
 choices[78]= new Array();
 choices[78][0] = "La coordinaci&oacute;n horizontal entre el responsable de gesti&oacute;n de documentos y los restantes servicios interesados en materia de archivos.";
 choices[78][1] = "La asociaci&oacute;n &uacute;nicamente de los metadatos m&iacute;nimos obligatorios, evitando la inclusi&oacute;n de metadatos complementarios.";
 choices[78][2] = "Transferencia, en su caso, de los expedientes entre los diferentes repositorios electr&oacute;nicos a efectos de conservaci&oacute;n, de acuerdo con lo establecido en la legislaci&oacute;n en materia de Archivos, de manera que se pueda asegurar su conservaci&oacute;n, y recuperaci&oacute;n a medio y largo plazo.";
 choices[78][3] = "La inclusi&oacute;n en los expedientes de un &iacute;ndice electr&oacute;nico firmado por el &oacute;rgano o entidad actuante que garantice la integridad del expediente electr&oacute;nico y permita su recuperaci&oacute;n.";
 answers[78] = 1;
 units[78] = ['45'];
 blocks[78] = ['B1'];
 comments[78] = "Id Pregunta: 2780. Examen TIC A1 AGE 2016";
 preguntaids[78] = 2780


//  Id pregunta: 2691 Año de creación de pregunta: 2014
 questions[79]= "80)  Atendiendo al RD 4/2010 de 8 de enero por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, la exigencia de que las Administraciones P&uacute;blicas deban usar est&aacute;ndares abiertos y, en su caso, est&aacute;ndares que sean de uso generalizado por los ciudadanos, es un principio de:<br/>";
 choices[79]= new Array();
 choices[79][0] = "interoperabilidad t&eacute;cnica.";
 choices[79][1] = "interoperabilidad organizativa.";
 choices[79][2] = "gesti&oacute;n de riesgos.";
 choices[79][3] = "auditor&iacute;a de seguridad.";
 answers[79] = 0;
 units[79] = ['45'];
 blocks[79] = ['B1'];
 comments[79] = "Id Pregunta: 2691. Examen TIC A1 AGE 2013";
 preguntaids[79] = 2691


//  Id pregunta: 2758 Año de creación de pregunta: 2016
 questions[80]= "81)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas NO corresponde a una Norma T&eacute;cnica de Interoperabilidad seg&uacute;n el Real Decreto 4/2010 (Esquema Nacional de Interoperabilidad) en su Disposici&oacute;n adicional primera:<br/>";
 choices[80]= new Array();
 choices[80][0] = "Catalogo de est&aacute;ndares.";
 choices[80][1] = "Requisitos de conexi&oacute;n a la Red de comunicaciones de las Administraciones p&uacute;blicas espa&ntilde;olas.";
 choices[80][2] = "Modelo de Datos para el intercambio de asientos entre las Entidades Registrales.";
 choices[80][3] = "Protocolos de comunicaci&oacute;n de red.";
 answers[80] = 3;
 units[80] = ['45'];
 blocks[80] = ['B1'];
 comments[80] = "Id Pregunta: 2758. Examen GSI A2 AGE 2013 Promoci&oacute;n Interna";
 preguntaids[80] = 2758


//  Id pregunta: 2689 Año de creación de pregunta: 2010
 questions[81]= "82)  &iquest;Qu&eacute; principio de los que se indican a continuaci&oacute;n NO est&aacute; recogido en el Marco Europeo de Interoperabilidad?<br/>";
 choices[81]= new Array();
 choices[81][0] = "Multiling&uuml;ismo.";
 choices[81][1] = "Subsidiariedad.";
 choices[81][2] = "Eficiencia.";
 choices[81][3] = "Accesibilidad.";
 answers[81] = 2;
 units[81] = ['45'];
 blocks[81] = ['B1'];
 comments[81] = "Id Pregunta: 2689. Examen TIC A1 AGE 2006";
 preguntaids[81] = 2689


//  Id pregunta: 2732 Año de creación de pregunta: 2015
 questions[82]= "83)  La NTI de Digitalizaci&oacute;n de Documentos indica que el nivel de resoluci&oacute;n m&iacute;nimo ser&aacute; para blanco y negro de:<br/>";
 choices[82]= new Array();
 choices[82][0] = "200 p&iacute;xeles por pulgada";
 choices[82][1] = "125 p&iacute;xeles por pulgada";
 choices[82][2] = "256 p&iacute;xeles por pulgada";
 choices[82][3] = "80 p&iacute;xeles por pulgada";
 answers[82] = 0;
 units[82] = ['45'];
 blocks[82] = ['B1'];
 comments[82] = "Id Pregunta: 2732. ";
 preguntaids[82] = 2732


//  Id pregunta: 2749 Año de creación de pregunta: 2010
 questions[83]= "84)  Seg&uacute;n el Esquema Nacional de Interoperabilidad, la interoperabilidad se entender&aacute; contemplando las dimensiones:<br/>";
 choices[83]= new Array();
 choices[83][0] = "T&eacute;cnica, sem&aacute;ntica y organizativa";
 choices[83][1] = "T&eacute;cnica, sem&aacute;ntica y funcional";
 choices[83][2] = "Funcional, sem&aacute;ntica y organizativa";
 choices[83][3] = "T&eacute;cnica, funcional y organizativa";
 answers[83] = 0;
 units[83] = ['45'];
 blocks[83] = ['B1'];
 comments[83] = "Id Pregunta: 2749. Art&iacute;culo 6";
 preguntaids[83] = 2749


//  Id pregunta: 2782 Año de creación de pregunta: 2016
 questions[84]= "85)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?<br/>";
 choices[84]= new Array();
 choices[84][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[84][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[84][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[84][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[84] = 0;
 units[84] = ['45'];
 blocks[84] = ['B1'];
 comments[84] = "Id Pregunta: 2782. Examen TIC A1 Junta de Extremadura 2015";
 preguntaids[84] = 2782


//  Id pregunta: 2736 Año de creación de pregunta: 2002
 questions[85]= "86)  La utilizaci&oacute;n de sistemas abiertos permite una serie de ventajas. Se&ntilde;ale cu&aacute;l de las siguientes no es una de ellas:<br/>";
 choices[85]= new Array();
 choices[85][0] = "Mejorar, en general, precio/rendimiento";
 choices[85][1] = "Simplificar el mantenimiento debido al reducido n&uacute;mero de posibles proveedores";
 choices[85][2] = "Garantizar la libertad de elecci&oacute;n";
 choices[85][3] = "Proteger la inversi&oacute;n realizada en equipo f&iacute;sico";
 answers[85] = 1;
 units[85] = ['45'];
 blocks[85] = ['B1'];
 comments[85] = "Id Pregunta: 2736. ";
 preguntaids[85] = 2736


//  Id pregunta: 2721 Año de creación de pregunta: 2002
 questions[86]= "87)  En relaci&oacute;n con la gu&iacute;a de portabilidad X/Open XPG4, el perfil XPG4 Base:<br/>";
 choices[86]= new Array();
 choices[86][0] = "No existe";
 choices[86][1] = "Supone la base de un servidor de base de datos";
 choices[86][2] = "Es equivalente al XPG3 y la base para el resto de los perfiles";
 choices[86][3] = "Para obtenerlo, es necesario certificar el componente XPG4 BSFT";
 answers[86] = 2;
 units[86] = ['45'];
 blocks[86] = ['B1'];
 comments[86] = "Id Pregunta: 2721. ";
 preguntaids[86] = 2721


//  Id pregunta: 2781 Año de creación de pregunta: 2020
 questions[87]= "88)  Se&ntilde;ale la opci&oacute;n correcta respecto a JOINUP:<br/>";
 choices[87]= new Array();
 choices[87][0] = "Se trata de una plataforma colaborativa creada por la Comisi&oacute;n Europea a trav&eacute;s del programa ISA 2";
 choices[87][1] = "Se trata de una plataforma colaborativa creada por organizaciones de la sociedad civil para la puesta en marcha de iniciativas relacionadas con la interoperabilidad sem&aacute;ntica";
 choices[87][2] = "Se recomienda su uso en la NTI de relaci&oacute;n de modelo de datos";
 choices[87][3] = "Se encuentra integrada en la plataforma de intermediaci&oacute;n de datos";
 answers[87] = 0;
 units[87] = ['45'];
 blocks[87] = ['B1'];
 comments[87] = "Id Pregunta: 2781. ";
 preguntaids[87] = 2781


//  Id pregunta: 2748 Año de creación de pregunta: 2002
 questions[88]= "89)  Se define la escalabilidad como:<br/>";
 choices[88]= new Array();
 choices[88][0] = "La posibilidad de que aplicaciones de distintos desarrolladores funcionen en m&aacute;quinas de distintos fabricantes";
 choices[88][1] = "La posibilidad de ampliar la capacidad de almacenamiento de un equipo sin necesidad de recurrir a piezas del fabricante que lo construy&oacute;";
 choices[88][2] = "La posibilidad de enlazar en una red, ordenadores de la misma gama, con la seguridad de que funcionar&aacute;n como un &uacute;nico sistema";
 choices[88][3] = "La posibilidad de utilizar el mismo entorno se software en diferentes gamas de ordenadores, desde ordenadores de sobremesa hasta mainframes";
 answers[88] = 3;
 units[88] = ['45'];
 blocks[88] = ['B1'];
 comments[88] = "Id Pregunta: 2748. ";
 preguntaids[88] = 2748


//  Id pregunta: 2741 Año de creación de pregunta: 2014
 questions[89]= "90)  Ordene en sentido cronol&oacute;gico ascendente los siguientes programas europeos relacionados con la administraci&oacute;n electr&oacute;nica:<br/>";
 choices[89]= new Array();
 choices[89][0] = "IDA I, IDA II, ISA, IDABC";
 choices[89][1] = "IDA I, IDA II, IDABC, ISA";
 choices[89][2] = "IDA, IDABC I, IDABC II, ISA";
 choices[89][3] = "IDA, ISA, IDABC I, IDABC II";
 answers[89] = 1;
 units[89] = ['45'];
 blocks[89] = ['B1'];
 comments[89] = "Id Pregunta: 2741. IDA I (1995-1998), IDA II (1999-2004), IDABC (2005-2009), ISA (2010-2015)";
 preguntaids[89] = 2741


//  Id pregunta: 2669 Año de creación de pregunta: 2011
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes normas t&eacute;cnicas de interoperabilidad no est&aacute; contemplada en el Desarrollo del Esquema Nacional de Interoperabilidad (disposici&oacute;n adicional primera), en el Real Decreto 4/2010 del 8 de enero?<br/>";
 choices[90]= new Array();
 choices[90][0] = "Cat&aacute;logo de est&aacute;ndares";
 choices[90][1] = "Documento electr&oacute;nico";
 choices[90][2] = "Expediente electr&oacute;nico";
 choices[90][3] = "Sede electr&oacute;nica";
 answers[90] = 3;
 units[90] = ['45'];
 blocks[90] = ['B1'];
 comments[90] = "Id Pregunta: 2669. ";
 preguntaids[90] = 2669


//  Id pregunta: 2766 Año de creación de pregunta: 2016
 questions[91]= "92)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:<br/>";
 choices[91]= new Array();
 choices[91][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[91][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[91][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[91][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[91] = 1;
 units[91] = ['45'];
 blocks[91] = ['B1'];
 comments[91] = "Id Pregunta: 2766. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[91] = 2766


//  Id pregunta: 2739 Año de creación de pregunta: 2016
 questions[92]= "93)  Los Portales de EE.LL. y CC.AA. ofrecen una herramienta de gesti&oacute;n de identidades de los empleados p&uacute;blicos de las entidades locales o auton&oacute;micas. Se&ntilde;ale la respuesta incorrecta:<br/>";
 choices[92]= new Array();
 choices[92][0] = "Los empleados p&uacute;blicos de las EE.LL. o CC.AA. tienen que solicitar el alta en alguna unidad local o auton&oacute;mica.";
 choices[92][1] = "Proporcionan tambi&eacute;n informaci&oacute;n del cargo y rol asociados.";
 choices[92][2] = "Cualquier organismo p&uacute;blico puede solicitar la inclusi&oacute;n en la plataforma de nuevas aplicaciones dirigidas a las EE.LL. o CC.AA.: &eacute;stas podr&aacute;n acceder desde un punto centralizado al nuevo servicio.";
 choices[92][3] = "Los portales est&aacute;n integrados y sincronizados con el Directorio Com&uacute;n de Unidades Org&aacute;nicas y Oficinas - DIR3, permitiendo que la gesti&oacute;n de usuarios y roles no se vea afectada por cambios en el directorio.";
 answers[92] = 0;
 units[92] = ['45'];
 blocks[92] = ['B1'];
 comments[92] = "Id Pregunta: 2739. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[92] = 2739


//  Id pregunta: 2686 Año de creación de pregunta: 2015
 questions[93]= "94)  &iquest;En cu&aacute;ntos cap&iacute;tulos se estructura el RD 4/2010 (ENI)?<br/>";
 choices[93]= new Array();
 choices[93][0] = "8";
 choices[93][1] = "10";
 choices[93][2] = "11";
 choices[93][3] = "12";
 answers[93] = 3;
 units[93] = ['45'];
 blocks[93] = ['B1'];
 comments[93] = "Id Pregunta: 2686. ";
 preguntaids[93] = 2686


//  Id pregunta: 2777 Año de creación de pregunta: 2020
 questions[94]= "95)  De acuerdo con el art&iacute;culo 15 del Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad, &iquest;con que organismo se realizar&aacute; la sincronizaci&oacute;n de la hora y fecha de los sistemas o aplicaciones implicados en la provisi&oacute;n de un servicio p&uacute;blico por v&iacute;a electr&oacute;nica?<br/>";
 choices[94]= new Array();
 choices[94][0] = "Con los servidores de la red SARA dedicados a tal efecto en el Ministerio de Presidencia.";
 choices[94][1] = "Con los servidores de Rediris.";
 choices[94][2] = "Con el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[94][3] = "Con el Real Instituto y Observatorio de la Armada.";
 answers[94] = 3;
 units[94] = ['45'];
 blocks[94] = ['B1'];
 comments[94] = "Id Pregunta: 2777. Examen SSTI A1 Xunta de Galicia 2018 Acceso libre";
 preguntaids[94] = 2777


//  Id pregunta: 2740 Año de creación de pregunta: 2015
 questions[95]= "96)  Marque la que no es una medida del Esquema Nacional de Interoperabilidad para la recuperaci&oacute;n y conservaci&oacute;n de documentos electr&oacute;nicos:<br/>";
 choices[95]= new Array();
 choices[95][0] = "La asociaci&oacute;n de metadatos m&iacute;nimos obligatorios.";
 choices[95][1] = "La documentaci&oacute;n de los procedimientos que garanticen la interoperabilidad a medio y largo plazo.";
 choices[95][2] = "La identificaci&oacute;n &uacute;nica e inequ&iacute;voca de cada documento.";
 choices[95][3] = "El establecimiento de un per&iacute;odo de conservaci&oacute;n de m&iacute;nimo cinco a&ntilde;os.";
 answers[95] = 3;
 units[95] = ['45'];
 blocks[95] = ['B1'];
 comments[95] = "Id Pregunta: 2740. Art&iacute;culo 21.f, RD 4/2010.";
 preguntaids[95] = 2740


//  Id pregunta: 2708 Año de creación de pregunta: 2010
 questions[96]= "97)  El Esquema Nacional de Interoperabilidad establece que los sistemas han de ser objeto de una auditor&iacute;a regular ordinaria al menos:<br/>";
 choices[96]= new Array();
 choices[96][0] = "Cada 6 meses";
 choices[96][1] = "Cada a&ntilde;o";
 choices[96][2] = "Cada 2 a&ntilde;os";
 choices[96][3] = "El Esquema Nacional de Interoperabilidad no especifica nada respecto a auditor&iacute;as";
 answers[96] = 3;
 units[96] = ['45'];
 blocks[96] = ['B1'];
 comments[96] = "Id Pregunta: 2708. ";
 preguntaids[96] = 2708


//  Id pregunta: 2687 Año de creación de pregunta: 2015
 questions[97]= "98)  &iquest;En qu&eacute; situaci&oacute;n pueden las AAPP establecer la obligatoriedad de comunicarse con ellas utilizando s&oacute;lo medios electr&oacute;nicos?<br/>";
 choices[97]= new Array();
 choices[97][0] = "Nunca";
 choices[97][1] = "&Uacute;nicamente cuando los interesados sean personas jur&iacute;dicas";
 choices[97][2] = "Cuando los interesados sean personas jur&iacute;dicas o colectivos de personas f&iacute;sicas que tengan garantizado el acceso y disponibilidad de los medios tecnol&oacute;gicos precisos";
 choices[97][3] = "En todo caso";
 answers[97] = 2;
 units[97] = ['45'];
 blocks[97] = ['B1'];
 comments[97] = "Id Pregunta: 2687. ";
 preguntaids[97] = 2687


//  Id pregunta: 2776 Año de creación de pregunta: 2020
 questions[98]= "99)  De acuerdo al art&iacute;culo 17 del ENI sobre directorios de aplicaciones reutilizables, indique la opci&oacute;n incorrecta:<br/>";
 choices[98]= new Array();
 choices[98][0] = "La Administraci&oacute;n General del Estado mantendr&aacute; el Directorio de aplicaciones para su libre reutilizaci&oacute;n que podr&aacute; ser accedido a trav&eacute;s del Centro de Transferencia de Tecnolog&iacute;a";
 choices[98][1] = "Las Administraciones p&uacute;blicas deber&aacute;n tener en cuenta las soluciones disponibles para la libre reutilizaci&oacute;n que puedan satisfacer total o parcialmente las necesidades de los nuevos sistemas y servicios o la mejora y actualizaci&oacute;n de los ya implantados";
 choices[98][2] = "En el caso de existir una soluci&oacute;n disponible para su reutilizaci&oacute;n total o parcial, las Administraciones P&uacute;blicas estar&aacute;n obligadas a su uso, salvo que la decisi&oacute;n de no reutilizarla se justifique en t&eacute;rminos de eficiencia conforme al art&iacute;culo 7 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera";
 choices[98][3] = "Las Administraciones p&uacute;blicas procurar&aacute;n la publicaci&oacute;n del c&oacute;digo de las aplicaciones, en desarrollo o finalizadas, en los directorios de aplicaciones para su libre reutilizaci&oacute;n con el fin de favorecer las actuaciones de compartir, reutilizar y colaborar, en beneficio de una mejor eficiencia";
 answers[98] = 2;
 units[98] = ['45'];
 blocks[98] = ['B1'];
 comments[98] = "Id Pregunta: 2776. La Ley 40/2015 establece la obligaci&oacute;n en el art&iacute;culo 157.";
 preguntaids[98] = 2776


//  Id pregunta: 2727 Año de creación de pregunta: 2002
 questions[99]= "100)  La caracter&iacute;stica que poseen los sistemas abiertos de permitir la utilizaci&oacute;n del mismo entorno de &quot;software&quot; en diferentes equipos f&iacute;sicos, desde ordenadores personales hasta grandes ordenadores, se denomina:<br/>";
 choices[99]= new Array();
 choices[99][0] = "Conectividad";
 choices[99][1] = "Integrabilidad";
 choices[99][2] = "Escalabilidad";
 choices[99][3] = "Interoperabilidad";
 answers[99] = 2;
 units[99] = ['45'];
 blocks[99] = ['B1'];
 comments[99] = "Id Pregunta: 2727. ";
 preguntaids[99] = 2727


//  Id pregunta: 2735 Año de creación de pregunta: 2002
 questions[100]= "101)  La primera fase a la hora de seleccionar un paquete o aplicaci&oacute;n est&aacute;ndar es:<br/>";
 choices[100]= new Array();
 choices[100][0] = "Llevar a cabo una investigaci&oacute;n preliminar";
 choices[100][1] = "Entrar en contacto con los suministradores";
 choices[100][2] = "Definir los requisitos del usuario";
 choices[100][3] = "Personalizar e implantar el paquete";
 answers[100] = 2;
 units[100] = ['45'];
 blocks[100] = ['B1'];
 comments[100] = "Id Pregunta: 2735. ";
 preguntaids[100] = 2735


//  Id pregunta: 2778 Año de creación de pregunta: 2020
 questions[101]= "102)  De acuerdo con el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, la sincronizaci&oacute;n de la fecha y la hora se realizar&aacute; con:<br/>";
 choices[101]= new Array();
 choices[101][0] = "El Observatorio Real de Greenwich.";
 choices[101][1] = "El Instituto Real de las Ciencias Naturales de Bruselas.";
 choices[101][2] = "El Centro Nacional de Inteligencia.";
 choices[101][3] = "El Real Instituto y Observ&aacute;torio de la Armada.";
 answers[101] = 3;
 units[101] = ['45'];
 blocks[101] = ['B1'];
 comments[101] = "Id Pregunta: 2778. Examen IASIS A1 Conselleria de Sanidad de la Generalitat Valenciana 2016";
 preguntaids[101] = 2778


//  Id pregunta: 2746 Año de creación de pregunta: 2015
 questions[102]= "103)  Respecto al Registro de Funcionarios Habilitados, se&ntilde;ale la respuesta correcta:<br/>";
 choices[102]= new Array();
 choices[102][0] = "Podr&aacute;n ser habilitados los funcionarios de carrera en situaci&oacute;n de servicio activo e inscritos en el Registro Electr&oacute;nico de Apoderamientos.";
 choices[102][1] = "El registro permite la descarga, bajo petici&oacute;n, de un fichero que con todas las habilitaciones vigentes para los tr&aacute;mites y actuaciones por medios electr&oacute;nicos de los que el &oacute;rgano peticionario sea competente.";
 choices[102][2] = "Las habilitaciones inscritas en el Registro deber&aacute;n ser efectivas en el plazo m&aacute;ximo de 5 d&iacute;as h&aacute;biles.";
 choices[102][3] = "La habilitaci&oacute;n se otorgar&aacute; por tiempo m&aacute;ximo de 2 a&ntilde;os, siendo necesaria su renovaci&oacute;n por parte del Departamento competente.";
 answers[102] = 1;
 units[102] = ['45'];
 blocks[102] = ['B1'];
 comments[102] = "Id Pregunta: 2746. Examen TIC A1 AGE 2014";
 preguntaids[102] = 2746


//  Id pregunta: 2668 Año de creación de pregunta: 2015
 questions[103]= "104)  &iquest;Cu&aacute;l de las siguientes no es una norma t&eacute;cnica de interoperabilidad?<br/>";
 choices[103]= new Array();
 choices[103][0] = "Cat&aacute;logo de est&aacute;ndares";
 choices[103][1] = "Modelo de datos para el intercambio de expedientes y documentos electr&oacute;nicos";
 choices[103][2] = "Procedimiento de copiado aut&eacute;ntico y conversi&oacute;n entre documentos electr&oacute;nicos";
 choices[103][3] = "Reutilizaci&oacute;n de recursos de informaci&oacute;n";
 answers[103] = 1;
 units[103] = ['45'];
 blocks[103] = ['B1'];
 comments[103] = "Id Pregunta: 2668. ";
 preguntaids[103] = 2668


//  Id pregunta: 2719 Año de creación de pregunta: 2016
 questions[104]= "105)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?<br/>";
 choices[104]= new Array();
 choices[104][0] = "Interchange of Data between Administrations (IDA)";
 choices[104][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[104][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[104][3] = "Interoperability Electronic European Solution (IEES)";
 answers[104] = 1;
 units[104] = ['45'];
 blocks[104] = ['B1'];
 comments[104] = "Id Pregunta: 2719. Examen TIC A1 AGE 2015";
 preguntaids[104] = 2719


//  Id pregunta: 2674 Año de creación de pregunta: 2013
 questions[105]= "106)  &iquest;Cu&aacute;l de los siguientes es un principio del programa IDABC?<br/>";
 choices[105]= new Array();
 choices[105][0] = "Alianzas.";
 choices[105][1] = "Compartici&oacute;n de recursos.";
 choices[105][2] = "Subsidiariedad.";
 choices[105][3] = "Ninguno de los anteriores.";
 answers[105] = 2;
 units[105] = ['45'];
 blocks[105] = ['B1'];
 comments[105] = "Id Pregunta: 2674. Examen GSI A2 AGE 2011";
 preguntaids[105] = 2674


//  Id pregunta: 2679 Año de creación de pregunta: 2014
 questions[106]= "107)  &iquest;Cu&aacute;l de los siguientes no es un principio del Marco Europeo de Interoperabilidad?<br/>";
 choices[106]= new Array();
 choices[106][0] = "Multiling&uuml;ismo";
 choices[106][1] = "Accesibilidad";
 choices[106][2] = "Empleo de soluciones de software libre";
 choices[106][3] = "Uso de est&aacute;ndares abiertos";
 answers[106] = 2;
 units[106] = ['45'];
 blocks[106] = ['B1'];
 comments[106] = "Id Pregunta: 2679. Los ocho principios que define el Marco Europeo de Interoperabilidad son: Accesibilidad, Multiling&uuml;ismo, Seguridad, Protecci&oacute;n de datos de car&aacute;cter personal, Subsidiariedad, Uso de est&aacute;ndares abiertos, Valorar los beneficios de software de fuentes abierta";
 preguntaids[106] = 2679


//  Id pregunta: 2703 Año de creación de pregunta: 2016
 questions[107]= "108)  El art&iacute;culo 16 del Esquema Nacional de Interoperabilidad establece las condiciones de licenciamiento aplicables en el &aacute;mbito de la reutilizaci&oacute;n y transferencia de tecnolog&iacute;a, &iquest;cu&aacute;l de las siguientes licencias recomienda expresamente aplicar, sin perjuicio de otras licencias que garanticen los derechos expuestos en el mencionado art&iacute;culo?<br/>";
 choices[107]= new Array();
 choices[107][0] = "ASF-AL (Apache License 2.0)";
 choices[107][1] = "EUPL (European Union Public License)";
 choices[107][2] = "LGPL (Lesser General Public License)";
 choices[107][3] = "MIT(MIT License)";
 answers[107] = 1;
 units[107] = ['45'];
 blocks[107] = ['B1'];
 comments[107] = "Id Pregunta: 2703. Examen TIC A1 AGE 2015";
 preguntaids[107] = 2703


//  Id pregunta: 2769 Año de creación de pregunta: 2016
 questions[108]= "109)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):<br/>";
 choices[108]= new Array();
 choices[108][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[108][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[108][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[108][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[108] = 1;
 units[108] = ['45'];
 blocks[108] = ['B1'];
 comments[108] = "Id Pregunta: 2769. Cat&aacute;logo de servicios de la administraci&oacute;n digital";
 preguntaids[108] = 2769


//  Id pregunta: 2688 Año de creación de pregunta: 2015
 questions[109]= "110)  &iquest;En virtud de qu&eacute; instrumento jur&iacute;dico se aprueban y publican las Normas T&eacute;cnicas de Interoperabilidad?<br/>";
 choices[109]= new Array();
 choices[109][0] = "Orden Ministerial del Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[109][1] = "Resoluci&oacute;n del Secretario de Estado de Presidencia.";
 choices[109][2] = "Resoluci&oacute;n del Secretario de Estado de Administraciones P&uacute;blicas.";
 choices[109][3] = "Reglamento del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 answers[109] = 2;
 units[109] = ['45'];
 blocks[109] = ['B1'];
 comments[109] = "Id Pregunta: 2688. Examen TIC A1 AGE 2014";
 preguntaids[109] = 2688


//  Id pregunta: 2756 Año de creación de pregunta: 2016
 questions[110]= "111)  Seg&uacute;n la NTI de Digitalizaci&oacute;n de Documentos, los documentos electr&oacute;nicos digitalizados deber&aacute;n en todo caso:<br/>";
 choices[110]= new Array();
 choices[110][0] = "Incluir la firma de la imagen electr&oacute;nica de acuerdo con la normativa aplicable.";
 choices[110][1] = "Someterse a procesos de optimizaci&oacute;n autom&aacute;tica de la imagen electr&oacute;nica.";
 choices[110][2] = "Incluir las anotaciones necesarias para proporcionar contexto a la imagen digitalizada.";
 choices[110][3] = "Ninguna de las respuestas es correcta.";
 answers[110] = 3;
 units[110] = ['45'];
 blocks[110] = ['B1'];
 comments[110] = "Id Pregunta: 2756. NTI";
 preguntaids[110] = 2756


//  Id pregunta: 2693 Año de creación de pregunta: 2006
 questions[111]= "112)  Cu&aacute;l de las siguientes afirmaciones sobre X/OPEN es incorrecta:<br/>";
 choices[111]= new Array();
 choices[111][0] = "POSIX (Portable Operating System Interface), creado por X/OPEN, consiste en la creaci&oacute;n de interfaces est&aacute;ndares de sistema operativo.";
 choices[111][1] = "CAE (Common Application Enviroment), creado por X/OPEN, est&aacute; basado en est&aacute;ndares internacionales y de hecho.";
 choices[111][2] = "XPG es la gu&iacute;a de portabilidad de X/OPEN.";
 choices[111][3] = "X/Open es una compa&ntilde;&iacute;a independiente, sin &aacute;nimo de lucro, compuesta por usuarios, vendedores independientes de software y vendedores de sistemas inform&aacute;ticos de todo el mundo.";
 answers[111] = 0;
 units[111] = ['45'];
 blocks[111] = ['B1'];
 comments[111] = "Id Pregunta: 2693. ";
 preguntaids[111] = 2693


//  Id pregunta: 2725 Año de creación de pregunta: 2002
 questions[112]= "113)  Entre otras, la ventaja principal de los sistemas abiertos para los usuarios es:<br/>";
 choices[112]= new Array();
 choices[112][0] = "Aseguran la conversi&oacute;n de datos entre sistemas";
 choices[112][1] = "Protegen la inversi&oacute;n realizada en los equipos f&iacute;sicos y en los programas";
 choices[112][2] = "Mejoran la calidad de los productos que se fabrican";
 choices[112][3] = "Los fabricantes tienen m&aacute;s en cuenta las opiniones de los usuarios";
 answers[112] = 1;
 units[112] = ['45'];
 blocks[112] = ['B1'];
 comments[112] = "Id Pregunta: 2725. ";
 preguntaids[112] = 2725


//  Id pregunta: 2753 Año de creación de pregunta: 2002
 questions[113]= "114)  Seg&uacute;n la ISO se entiende como Sistema abierto:<br/>";
 choices[113]= new Array();
 choices[113][0] = "Entornos dise&ntilde;ados e implantados con normas ampliamente divulgadas y b&aacute;sicamente independientes de los fabricantes";
 choices[113][1] = "Un sistema inform&aacute;tico capaz de dialogar con el resto de su entorno seg&uacute;n las normas definidas por su fabricante";
 choices[113][2] = "Un sistema inform&aacute;tico capaz de interconectarse con otros de acuerdo con unas normas establecidas";
 choices[113][3] = "Sistemas cuyas especificaciones est&aacute;n aprobadas, publicadas y respaldadas por organismos independientes de normalizaci&oacute;n";
 answers[113] = 2;
 units[113] = ['45'];
 blocks[113] = ['B1'];
 comments[113] = "Id Pregunta: 2753. Examen TIC A2 Arag&oacute;n 2015";
 preguntaids[113] = 2753


//  Id pregunta: 2726 Año de creación de pregunta: 2002
 questions[114]= "115)  Indicar cu&aacute;l de los siguientes no es uno de los objetivos de la Decisi&oacute;n 87/95/CEE:<br/>";
 choices[114]= new Array();
 choices[114][0] = "Contribuir a la integraci&oacute;n del mercado interior de la Comunidad en el sector de las tecnolog&iacute;as de la informaci&oacute;n y de las telecomunicaciones";
 choices[114][1] = "Facilitar los intercambios de informaci&oacute;n en toda la Comunidad";
 choices[114][2] = "Garantizar que se tomen en cuenta las necesidades de los usuarios";
 choices[114][3] = "Todos los anteriores son objetivos de la Decisi&oacute;n 87/95/CEE";
 answers[114] = 3;
 units[114] = ['45'];
 blocks[114] = ['B1'];
 comments[114] = "Id Pregunta: 2726. ";
 preguntaids[114] = 2726


//  Id pregunta: 2742 Año de creación de pregunta: 2006
 questions[115]= "116)  Qu&eacute; organizaci&oacute;n normalizadora se dedica a trabajar en la extensi&oacute;n del est&aacute;ndar POSIX (Portable Operating System Interface for Computer Environments):<br/>";
 choices[115]= new Array();
 choices[115][0] = "X/OPEN";
 choices[115][1] = "ACE";
 choices[115][2] = "OSF";
 choices[115][3] = "IEEE";
 answers[115] = 3;
 units[115] = ['45'];
 blocks[115] = ['B1'];
 comments[115] = "Id Pregunta: 2742. ";
 preguntaids[115] = 2742


//  Id pregunta: 2774 Año de creación de pregunta: 2020
 questions[116]= "117)  &iquest;Cu&aacute;ntas normas t&eacute;cnicas de interoperabilidad existen?<br/>";
 choices[116]= new Array();
 choices[116][0] = "8";
 choices[116][1] = "10";
 choices[116][2] = "12";
 choices[116][3] = "14";
 answers[116] = 2;
 units[116] = ['45'];
 blocks[116] = ['B1'];
 comments[116] = "Id Pregunta: 2774. ";
 preguntaids[116] = 2774


//  Id pregunta: 2713 Año de creación de pregunta: 2013
 questions[117]= "118)  El Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica define la interoperabilidad sem&aacute;ntica como:<br/>";
 choices[117]= new Array();
 choices[117][0] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la capacidad de las entidades y de los procesos a trav&eacute;s de los cuales llevan a cabo sus actividades para colaborar con el objeto de alcanzar logros mutuamente acordados relativos a los servicios que prestan.";
 choices[117][1] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n.";
 choices[117][2] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la relaci&oacute;n entre sistemas y servicios de tecnolog&iacute;as de la informaci&oacute;n, incluyendo aspectos tales como las interfaces, la interconexi&oacute;n, la integraci&oacute;n de datos y servicios, la presentaci&oacute;n de la informaci&oacute;n, la accesibilidad y la seguridad, u otros de naturaleza an&aacute;loga.";
 choices[117][3] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la interacci&oacute;n entre elementos que corresponden a diversas oleadas tecnol&oacute;gicas; se manifiesta especialmente en la conservaci&oacute;n de la informaci&oacute;n en soporte electr&oacute;nico.";
 answers[117] = 1;
 units[117] = ['45'];
 blocks[117] = ['B1'];
 comments[117] = "Id Pregunta: 2713. Examen TIC A1 AGE 2011";
 preguntaids[117] = 2713


//  Id pregunta: 2754 Año de creación de pregunta: 2013
 questions[118]= "119)  Seg&uacute;n la norma t&eacute;cnica de interoperabilidad de pol&iacute;tica de firma electr&oacute;nica y de certificados de la administraci&oacute;n del Esquema Nacional de Interoperabilidad:<br/>";
 choices[118]= new Array();
 choices[118][0] = "Los formatos para la firma electr&oacute;nica de contenidos ser&aacute;n XAdES, CAdES y PAdES.";
 choices[118][1] = "El perfil m&iacute;nimo de formato que se utilizar&aacute; para la generaci&oacute;n de firmas de contenido en el marco de una pol&iacute;tica ser&aacute; -A.";
 choices[118][2] = "Los documentos electr&oacute;nicos a los que se aplique firma basada en certificados de cara a su intercambio no se ajustar&aacute;n a las especificaciones de formato y estructura establecidas en la NTI de Documento electr&oacute;nico.";
 choices[118][3] = "El perfil m&iacute;nimo de formato que se utilizar&aacute; para la generaci&oacute;n de firmas de contenido en el marco de una pol&iacute;tica ser&aacute; -C.";
 answers[118] = 0;
 units[118] = ['45'];
 blocks[118] = ['B1'];
 comments[118] = "Id Pregunta: 2754. Examen TIC A1 AGE 2011";
 preguntaids[118] = 2754


