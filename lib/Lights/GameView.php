<?php
/**
 * Main game view class
 * @author Charles B. Owen
 */

namespace Lights;

/**
 * Main game view class
 */
class GameView extends View {
	public function __construct(Lights $lights) {
		parent::__construct($lights);

//		if($game->getGrid() === null) {
//			$this->setRedirect("./");
//		}
	}

	/**
	 * Preset the page header
	 * @return string HTML
	 */
	public function present_header() {
		$html = parent::present_header();

		$name = $this->getLights()->getPlayer();

		$html .= <<<HTML
<nav><p><a href="./">NEW GAME</a> <a href="options.php">OPTIONS</a> <a href="instructions.php" target="_blank">INSTRUCTIONS</a></p></nav>
<h1 class="center">Greetings, $name, and welcome to Light Em Up!</h1>
</header>
HTML;

		return $html;
	}

	/**
	 * Present the page footer
	 * @return string HTML
	 */
	public function present_body() {
	    $lights = $this->getLights();
	    $game = $lights->getGame();

		$html = <<<HTML
<div class="body">
<form class="game" >
HTML;

		$html .= $game->presentGame(true);

        $html .= '<div class="controls">';


            $html .= <<<HTML
<p><button name="check">Check Solution</button></p>
<p><button name="solve">Solve</button><p>
<p><button name="clear">Clear</button></p>
HTML;

		$html .= <<<HTML
</div>
<div class="messageDiv" style="display: none"></div>
</form>
</div>
HTML;

		return $html;
	}
}