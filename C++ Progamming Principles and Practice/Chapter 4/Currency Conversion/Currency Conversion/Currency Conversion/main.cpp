#include "std_lib_facilities.h"

int main() {
	double amt;
	char currency;
	cout << "Please enter an amount of money followed by the these types of currency.\nYen: y, Euro: e, Pound: p, Yuan: u, Kroner: k.\n";
	cin >> amt >> currency;
	switch (currency) {
	case 'y':
		cout << amt << " Yen is equal to $" << .0096 * amt << " USD.\n";
		break;
	case 'e':
		cout << amt << " Euro is equal to $" << 1.09 * amt << " USD.\n";
		break;
	case 'p':
		cout << amt << " Pound is equal to $" << 1.22 * amt << " USD.\n";
		break;
	case 'u':
		cout << amt << " Yuan is equal to $"  << 0.15 * amt << " USD.\n";
		break;
	case 'k':
		cout << amt << " Kroner is equal to $ " << 0.15 * amt << " USD.\n";
		break;
	}
	keep_window_open();
}